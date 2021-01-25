import { GET_EVENTS } from 'graphql/events';
import { initializeApollo } from 'lib/apollo';
import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(ctx) {
  const apolloClient = initializeApollo();

  const { data: eventsData } = await apolloClient.query({
    query: GET_EVENTS,
  });
  const events = eventsData.events.map(item => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/events/${item.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.5,
    changefreq: 'always',
  }));
  const result = events.filter(
    (v, i, a) => a.findIndex(t => JSON.stringify(t) === JSON.stringify(v)) === i
  );

  return getServerSideSitemap(ctx, result);
}

const Sitemap = () => {};
export default Sitemap;
