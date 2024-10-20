"use server";
import fs from "fs";
import path from "path";
import xml2js from "xml2js";
import { getcollection } from "@/app/Mongodb";
const { Productscollection, blogscollection } = getcollection();

// Helper to create encoded URLs
const createUrl = (base, path) => encodeURI(`${base}/${path}`);

export default async function Updatesitemap() {
  try {
    const baseUrl = "https://adorefurnix.com";
    const currentDate = new Date().toISOString();
    
    // Fetch products and blogs concurrently
    const [productsList, blogsList] = await Promise.all([
      Productscollection.find().toArray(),
      blogscollection.find().toArray()
    ]);

    // Map product and blog links
    const productlinks = productsList.map((item) => ({
      loc: createUrl(baseUrl, `${item.category}/${item.subcat}/${item._id.toString()}`.replace(/ /g, "_")),
      lastmod: currentDate,
      priority: "0.8",
    }));

    const bloglinks = blogsList.map((item) => ({
      loc: createUrl(baseUrl, `Blogs/${item._id.toString()}`.replace(/ /g, "_")),
      lastmod: currentDate,
      priority: "0.6",
    }));

    const newUrls = [...productlinks, ...bloglinks];
    const filePath = path.join(process.cwd(), "public", "sitemap.xml");

    // Read and parse the sitemap synchronously
    const data = fs.readFileSync(filePath, "utf8");
    const result = await xml2js.parseStringPromise(data);

    const existingUrls = new Set(result.urlset.url.map((url) => url.loc[0]));

    // Add only new URLs
    newUrls.forEach((url) => {
      if (!existingUrls.has(url.loc)) {
        if (!result.urlset.url) {
          result.urlset.url = []; // Ensure the url array exists
        }
        result.urlset.url.push({
          loc: [url.loc],
          lastmod: [url.lastmod],
          priority: [url.priority],
        });
        existingUrls.add(url.loc); // Update the Set with new URL
      }
    });

    // Build the updated XML
    const builder = new xml2js.Builder();
    const updatedXml = builder.buildObject(result);

    // Write the updated XML synchronously
    fs.writeFileSync(filePath, updatedXml);

    return { status: 200, message: "Sitemap updated successfully" };
  } catch (err) {
    console.error("Error updating sitemap", err.message || err);
    return { status: 500, message: "Failed to update sitemap" };
  }
}
