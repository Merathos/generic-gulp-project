import { Layout, Internship } from 'containers';
import mock from 'mock/index';

const internshipPage = () => {
  return (
    <Layout isVisible={false} plainHeader={true} smallIndent>
      <Internship data={mock.internship} />
    </Layout>
  );
};

export default internshipPage;
