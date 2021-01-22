import { Layout, About } from 'containers';
import Head from 'next/head';

import mock from 'mock/about';

const aboutPage = () => {
  return (
    <>
      <Head>
        <title>O компании DINS</title>
        <meta
          name="description"
          content="23 года со дня основания DINS. 1000+ человек работает в штате, большая часть из них — инженеры. 450+ тысяч компаний пользуются решением, в создании которого мы участвуем."
        />
      </Head>
      <Layout greyFooter isVisible={false} plainHeader smallIndent>
        <About data={mock.about} />
      </Layout>
    </>
  );
};

export default aboutPage;
