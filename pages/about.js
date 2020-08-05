import { Layout, About } from 'containers';

import mock from 'mock/index';

const aboutPage = () => {
  return (
    <Layout backButton greyFooter>
      <About data={mock.about} />
    </Layout>
  );
};

export default aboutPage;
