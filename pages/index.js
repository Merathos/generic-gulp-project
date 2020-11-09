import { Layout, Main } from 'containers';
import mock from 'mock/index';

const mainPage = () => {
  return (
    <Layout greyFooter plainHeader smallPadding={true} isVisible={false}>
      <Main data={mock.main} storiesData={mock.stories} teams={mock.teams} />
    </Layout>
  );
};

export default mainPage;
