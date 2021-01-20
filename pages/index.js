import { Layout, Main } from 'containers';
import mock from 'mock/index';
import { initializeApollo } from 'lib/apollo';
import { useQuery } from '@apollo/client';
import Head from 'next/head';

import {
  GET_QUOTES,
  GET_BANNER,
  GET_BLOGS_MAIN,
  GET_TEAMS_MAIN,
  GET_VACANCY_CATEGORIES_MAIN,
} from 'graphql/main';

const mainPage = () => {
  const { data: quotesData } = useQuery(GET_QUOTES);
  const { data: bannerData } = useQuery(GET_BANNER);
  const { data: blogsData } = useQuery(GET_BLOGS_MAIN, {
    variables: { is_home: true },
  });
  const { data: teamsData } = useQuery(GET_TEAMS_MAIN, {
    variables: { is_home: true },
  });
  const { data: vacancyCatData } = useQuery(GET_VACANCY_CATEGORIES_MAIN);

  return (
    <>
      <Head>
        <title>DINS - создаем лучший в мире телекоммуникационный сервис</title>
        <meta
          name="description"
          content="DINS — это центр разработки американской компании RingCentral, ведущего разработчика и провайдера облачных коммуникационных услуг для бизнеса. Мы работаем в Санкт‑Петербурге с 1998 года, сейчас штат компании составляет 1000+ сотрудников, большая часть из которых инженеры."
        />
      </Head>
      <Layout greyFooter plainHeader smallPadding isVisible={false}>
        <Main
          data={mock.main}
          storiesData={mock.stories}
          quotes={quotesData?.quotes}
          banner={bannerData?.banner}
          blogs={blogsData?.blogs}
          teams={teamsData?.teams}
          vacancyCat={vacancyCatData?.vacancy_categories}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_QUOTES,
  });
  await apolloClient.query({
    query: GET_BANNER,
  });
  await apolloClient.query({
    query: GET_BLOGS_MAIN,
    variables: { is_home: true },
  });
  await apolloClient.query({
    query: GET_TEAMS_MAIN,
    variables: { is_home: true },
  });
  await apolloClient.query({
    query: GET_VACANCY_CATEGORIES_MAIN,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
export default mainPage;
