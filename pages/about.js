import { Layout, About } from 'containers';
import Head from 'next/head';
import { GET_VACANCY_STACKS } from 'graphql/vacancy';
import { useQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apollo';

import mock from 'mock/about';

const aboutPage = () => {
  const { data: stacksData } = useQuery(GET_VACANCY_STACKS);

  return (
    <>
      <Head>
        <title>O компании DINS</title>
        <meta
          name="description"
          content="DINS — IT-компания из Петербурга. Мы участвуем в разработке UCaaS-платформы американской компании RingCentral. Присоединяйтесь к команде — вакансии на сайте."
        />
      </Head>
      <Layout greyFooter isVisible={false} plainHeader smallIndent>
        <About data={mock.about} stacks={stacksData?.vacancy_stacks} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_VACANCY_STACKS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default aboutPage;
