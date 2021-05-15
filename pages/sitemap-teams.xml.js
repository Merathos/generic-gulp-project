import { GET_TEAM_CATEGORIES } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';
import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();

  const { data: teamsData } = await apolloClient.query({
    query: GET_TEAM_CATEGORIES,
  });
  const teams = teamsData.teams.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/teams/${item.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.5,
    changefreq: 'always',
  }));
  const result = teams.filter(
    (v, i, a) =>
      a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
  );

  return getServerSideSitemap(ctx, result);
}

const Sitemap = () => {};
export default Sitemap;
