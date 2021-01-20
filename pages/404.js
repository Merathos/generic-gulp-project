import { Layout, Page404 } from 'containers';
import Head from 'next/head';

const p404 = () => {
  return (
    <>
      <Head>
        <title>Ошибка 404</title>
        <meta
          name="description"
          content="Возможно, вы ввели неправильный адрес, или страница была удалена."
        />
        <meta name="robots" content="noindex, nofollow" />
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
