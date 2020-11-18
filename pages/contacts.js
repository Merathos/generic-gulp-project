import { Layout, Contacts } from 'containers';

import mock from 'mock/index';

const contactsPage = () => {
  return (
    <Layout nimax isVisible={false}>
      <Contacts data={mock.contacts} />
    </Layout>
  );
};

export default contactsPage;
