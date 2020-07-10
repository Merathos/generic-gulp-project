import { Layout, Vacancy } from 'containers';

import mock from 'mock/index';

const vacancyPage = () => {
  return (
  <Layout backButton>
    <Vacancy data={mock.vacancy} />
  </Layout>
  )
};

export default vacancyPage;
