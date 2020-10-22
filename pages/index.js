import { Layout, Main } from 'containers';
import mock from 'mock/index';

const mainPage = () => {
  return (
    <Layout greyFooter plainHeader isVisible={false}>
      <Main data={mock.intro} />
    </Layout>
  );
};

export default mainPage;
