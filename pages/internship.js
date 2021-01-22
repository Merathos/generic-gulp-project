import { Layout, Internship } from 'containers';
import mock from 'mock/internship';
import { initializeApollo } from 'lib/apollo';
import { GET_VACANCIES } from 'graphql/vacancy';
import { useQuery } from '@apollo/client';
import Head from 'next/head';

const internshipPage = () => {
  const { data: vacanciesData } = useQuery(GET_VACANCIES, {
    variables: { internship: true, limit: 6 },
  });

  return (
    <>
      <Head>
        <title>Стажировка в DINS</title>
        <meta
          name="description"
          content="Приглашаем студентов старших курсов и магистратуры, аспирантов и выпускников технических вузов на оплачиваемую стажировку."
        />
      </Head>
      <Layout isVisible={false} plainHeader smallIndent>
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
