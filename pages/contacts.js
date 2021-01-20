import { Layout, Contacts } from 'containers';
import Head from 'next/head';

import mock from 'mock/index';

const contactsPage = () => {
  return (
    <>
      <Head>
        <title>Контакты DINS</title>
        <meta
          name="description"
          content="Два офисе в Петербурге в шаговой доступности от метро. Один находится в БЦ «Петергофский», другой - в БЦ «Фидель»."
        />
      </Head>
      <Layout nimax isVisible={false} plainHeader>
        <Contacts data={mock.contacts} />
      </Layout>
    </>
  );
};

export default contactsPage;
