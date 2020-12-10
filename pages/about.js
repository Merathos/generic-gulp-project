import { Layout, About } from 'containers';

import mock from 'mock/index';

const aboutPage = () => {
  return (
    <Layout greyFooter isVisible={false} plainHeader={true} smallIndent>
      <About data={mock.about} />
    </Layout>
  );
};

export default aboutPage;
