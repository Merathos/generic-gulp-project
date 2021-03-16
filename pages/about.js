import { Layout, CustomHead, About } from 'containers';
import { GET_VACANCY_STACKS } from 'graphql/vacancy';
import { useQuery } from '@apollo/client';
import { initializeApollo } from 'lib/apollo';
import mock from 'mock/about';

const TITLE = 'O компании DINS';
const DESCRIPTION =
  'DINS — IT-компания из Петербурга. Мы участвуем в разработке UCaaS-платформы американской компании RingCentral. Присоединяйтесь к команде — вакансии на сайте.';

const aboutPage = () => {
  const { data: stacksData } = useQuery(GET_VACANCY_STACKS);

  return (
    <>
      <CustomHead title={TITLE} description={DESCRIPTION} />
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
