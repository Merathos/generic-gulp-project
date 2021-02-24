import { Layout, Contacts } from 'containers';
import Head from 'next/head';

import mock from 'mock/contacts';

const contactsPage = () => {
  return (
    <>
      <Head>
        <title>Контакты DINS</title>
        <meta
          name="description"
          content="IT-компания из Петербурга. Два офиса в шаговой доступности от метро. Отправить резюме."
        />
      </Head>
      <Layout nimax isVisible={false} plainHeader>
        <Contacts data={mock.contacts} />
      </Layout>
    </>
  );
};

export default contactsPage;
