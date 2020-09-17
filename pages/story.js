import { Layout, Story } from 'containers';

import mock from 'mock/index';

const articlePage = () => {
  return (
    <Layout backButton greyFooter>
      <Story data={mock.story} />
    </Layout>
  );
};

export default articlePage;
