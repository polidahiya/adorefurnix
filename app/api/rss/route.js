"use server";
import { domain } from "@/app/commondata";
import { Cachedproducts } from "@/app/_serveractions/Getcachedata";

export async function GET() {
  try {
    const allproducts = await Cachedproducts();
    const today = new Date(); // Get today's date

    const posts = allproducts.flatMap((item) => {
      return item?.colorpalets.map((color, j) => ({
        title: item?.name,
        link: `${domain}/${item?.category}/${item?.subcat}/${item?._id}?color=${j}`.replace(
          / /g,
          "_"
        ),
        description:
          "Dimensions: " +
          item?.Dimensions +
          "_______________ Explore the best solid wood furniture in India. Find quality furniture online and near you, including Sheesham wood furniture, dining tables, sofa sets, and more at affordable prices.______________ #furnituredesign #homedecor #interiordesign #furnitureinspo #furnituregoals #furnitureaddict #furniturelovers #modernfurniture #luxuryfurniture #customfurniture",
        pubDate: today.toUTCString(), // Convert to proper date string
        imageUrl: color?.images[0],
      }));
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
              <title><![CDATA[${post.title}]]></title>
              <link><![CDATA[${post.link}]]></link>
              <description><![CDATA[${post.description}]]></description>
              <pubDate>${post.pubDate}</pubDate>
              <enclosure url="${post.imageUrl}"/>
            </item>
          `
            )
            .join("")}
        </channel>
      </rss>
    `.trim();
    const test = `<item>
<title>
<![CDATA[ Merlin mose full cushion bed ]]>
</title>
<link>
<![CDATA[ https://adorefurnix.com/Bedroom/King_Size_Bed/6682da7d1e75b277128f181b?color=0 ]]>
</link>
<description>
<![CDATA[ Dimensions: 72 x 78 ( mattress size ) _______________ Explore the best solid wood furniture in India. Find quality furniture online and near you, including Sheesham wood furniture, dining tables, sofa sets, and more at affordable prices.______________ #furnituredesign #homedecor #interiordesign #furnitureinspo #furnituregoals #furnitureaddict #furniturelovers #modernfurniture #luxuryfurniture #customfurniture ]]>
</description>
<pubDate>Thu, 28 Nov 2024 15:34:28 GMT</pubDate>
<enclosure url="https://res.cloudinary.com/drnfvc0jt/image/upload/v1719851644/Adorefurnix/zzwqzoj909v1jlrtpwxn.jpg"/>
</item>`;

    return new Response(test, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
