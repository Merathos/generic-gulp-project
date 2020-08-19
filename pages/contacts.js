import { Layout, Contacts } from 'containers';

import mock from 'mock/index';

const contactsPage = () => {
  return (
    <Layout backButton nimax>
      <Contacts data={mock.contacts} />
    </Layout>
  );
}

export default contactsPage;
