"use server";
import { domain, sociallinks } from "@/app/commondata";
import { Cachedproducts } from "@/app/_serveractions/Getcachedata";

export async function GET() {
  try {
    const allproducts = await Cachedproducts();
    const today = new Date(); // Get today's date
    const posts = allproducts.flatMap((item) => {
      return item?.colorpalets.map((color, j) => {
        return {
          title: item?.name,
          link: `${domain}/${item?.category}/${item?.subcat}/${item?._id}?color=${j}`.replace(
            / /g,
            "_"
          ),
          description:
            "Dimensions: " +
            item?.Dimensions +
            "_______________Explore the best solid wood furniture in India. Find quality furniture online and near you, including Sheesham wood furniture, dining tables, sofa sets, and more at affordable prices.______________ #furnituredesign #homedecor #interiordesign #furnitureinspo #furnituregoals #furnitureaddict #furniturelovers #modernfurniture #luxuryfurniture #customfurniture",
          pubDate: today, // Use today's date
          imageUrl: color?.images[0],
        };
      });
    });

    const rssFeed = `
      <?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
          <title>Adorefurnix - Get Solid Wood Furniture at best price</title>
          <link>${domain}</link>
          <description>Explore the best solid wood furniture in India. Find quality furniture online and near you, including Sheesham wood furniture, dining tables, sofa sets, and more at affordable prices.</description>
          <language>en-us</language>
          ${posts
            .map(
              (post) => `
            <item>
              <title>${post.title}</title>
              <link>${post.link}</link>
              <description>${post.description}</description>
              <pubDate>${post.pubDate.toUTCString()}</pubDate>
              <enclosure url="${post.imageUrl}" />
            </item>
          `
            )
            .join("")}
        </channel>
      </rss>
      `;

    return new Response(rssFeed, {
      status: 200,
      headers: {
        "Content-Type": "application/rss+xml",
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
