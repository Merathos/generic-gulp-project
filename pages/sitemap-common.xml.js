import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: '',
    },
    {
      loc: 'contacts',
    },
    {
      loc: 'about',
    },
    {
      loc: 'internship',
    },
    {
      loc: 'relocation',
    },
    {
      loc: 'vacancies',
    },
    {
      loc: 'blog',
    },
    {
      loc: 'events',
    },
    {
      loc: 'teams',
    },
  ];

  const result = fields.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${item.loc}`,
    lastmod: new Date().toISOString(),
    priority: 0.5,
    changefreq: 'always',
  }));

  return getServerSideSitemap(ctx, result);
};

// Default export to prevent next.js errors
export default () => {};
