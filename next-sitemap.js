/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://adorefurnix.com",
  generateRobotsTxt: true,
  exclude: ["/admin/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: "*",
        disallow: ["/admin", "/orderdetails", "/likedproducts", "/cart"],
      },
    ],
  },
  sitemapSize: 50000,
};
