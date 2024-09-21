// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:'https://saeed-pk.vercel.app',  // Your website's base URL
    generateRobotsTxt: true,  // Generate robots.txt file
    changefreq: 'weekly',  // How often URLs change
    priority: 0.7,  // Default priority of URLs
    sitemapSize: 5000,  // Split sitemaps into smaller files if the URL count exceeds this number
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' },
      ],
      
    },
  };
  