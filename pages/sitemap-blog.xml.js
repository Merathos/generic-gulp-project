import { GET_BLOGS_LIST } from 'graphql/blogs';
import { initializeApollo } from 'lib/apollo';
import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();

  const { data: blogData } = await apolloClient.query({
    query: GET_BLOGS_LIST,
  });
  const blogs = blogData.blogs.map(item => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${item.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.5,
    changefreq: 'always',
  }));
  const result = blogs.filter(
    (v, i, a) => a.findIndex(t => JSON.stringify(t) === JSON.stringify(v)) === i
  );

  return getServerSideSitemap(ctx, result);
}

const Sitemap = () => {};
export default Sitemap;
