import { useRouter } from 'next/router';
import { Layout, Page404 } from 'containers';
import Head from 'next/head';

const p404 = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Layout backButton plainHeader greyHeader={false} isVisible={false}>
        <Page404 />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default p404;
