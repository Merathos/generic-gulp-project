import { GET_VACANCIES } from 'graphql/vacancy';
import { initializeApollo } from 'lib/apollo';
import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();

  const { data: vacanciesData } = await apolloClient.query({
    query: GET_VACANCIES,
  });
  const vacancies = vacanciesData.vacancies.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/vacancies/${item.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.5,
    changefreq: 'always',
  }));
  const result = vacancies.filter(
    (v, i, a) =>
      a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
  );

  return getServerSideSitemap(ctx, result);
}

const Sitemap = () => {};
export default Sitemap;
