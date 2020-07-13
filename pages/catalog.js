import { Layout, Catalog } from 'containers';

import mock from 'mock/index';

const catalogPage = () => {
  return (
    <Layout backButton>
      <Catalog data={mock.catalog} />
    </Layout>
  );
};

export default catalogPage;
