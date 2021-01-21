require('dotenv').config({ path: '.env.local' });

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN,
  generateRobotsTxt: true,
  exclude: ['/sitemaps/*'],
  sitemapSize: 50000,
  changefreq: 'weekly',
  priority: '0.5',
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_DOMAIN}/sitemaps/vacancies-sitemap.xml`,
      `${process.env.NEXT_PUBLIC_DOMAIN}/sitemaps/teams-sitemap.xml`,
      `${process.env.NEXT_PUBLIC_DOMAIN}/sitemaps/events-sitemap.xml`,
      `${process.env.NEXT_PUBLIC_DOMAIN}/sitemaps/blog-sitemap.xml`,
    ],
  },
};
