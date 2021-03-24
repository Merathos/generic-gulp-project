import { Layout, CustomHead, Internship } from 'containers';
import mock from 'mock/internship';
import { initializeApollo } from 'lib/apollo';
import { GET_VACANCIES } from 'graphql/vacancy';
import { useQuery } from '@apollo/client';

const internshipPage = () => {
  const { data: vacanciesData } = useQuery(GET_VACANCIES, {
    variables: { internship: true, limit: 6 },
  });

  const TITLE = 'Стажировка в DINS';
  const DESCRIPTION =
    'Оплачиваемая стажировка по направлениям QA, QA Automation и DevOps для студентов старших курсов и выпускников технических вузов.';

  return (
    <>
      <CustomHead title={TITLE} description={DESCRIPTION} />
      <Layout plainHeader>
        <Internship
          data={mock.internship}
          vacanciesData={vacanciesData?.vacancies}
        />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_VACANCIES,
    variables: { internship: true, limit: 6 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
export default internshipPage;
