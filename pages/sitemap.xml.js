const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${`${process.env.NEXT_PUBLIC_DOMAIN}/sitemap-common.xml`}</loc>
    </sitemap>
    <sitemap>
      <loc>${`${process.env.NEXT_PUBLIC_DOMAIN}/sitemap-blog.xml`}</loc>
    </sitemap>
    <sitemap>
      <loc>${`${process.env.NEXT_PUBLIC_DOMAIN}/sitemap-events.xml`}</loc>
    </sitemap>
    <sitemap>
      <loc>${`${process.env.NEXT_PUBLIC_DOMAIN}/sitemap-teams.xml`}</loc>
    </sitemap>
    <sitemap>
      <loc>${`${process.env.NEXT_PUBLIC_DOMAIN}/sitemap-vacancies.xml`}</loc>
    </sitemap>
  </sitemapindex>
`;

// remove component
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap());
  res.end();
}

// add component here
export default () => {};
