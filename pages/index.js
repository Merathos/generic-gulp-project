import { Layout, Main, CustomHead } from 'containers';
import mock from 'mock/main';
import { initializeApollo } from 'lib/apollo';
import { useQuery } from '@apollo/client';

import {
  GET_QUOTES,
  GET_BANNER,
  GET_BLOGS_MAIN,
  GET_TEAMS_MAIN,
  GET_VACANCY_CATEGORIES_MAIN,
} from 'graphql/main';
import { GET_VACANCY_STACKS } from 'graphql/vacancy';

const TITLE = 'DINS: меняем мир бизнес-коммуникаций';
const DESCRIPTION =
  'Работайте с нами и развивайте платформу для облачных коммуникаций, которой пользуются более 400 тыс. бизнесов по всем миру.';

const mainPage = () => {
  const { data: quotesData } = useQuery(GET_QUOTES, {
    fetchPolicy: 'no-cache',
  });
  const { data: bannerData } = useQuery(GET_BANNER);
  const { data: blogsData } = useQuery(GET_BLOGS_MAIN, {
    variables: { is_home: true },
  });
  const { data: teamsData } = useQuery(GET_TEAMS_MAIN, {
    variables: { is_home: true },
  });
  const { data: vacancyCatData } = useQuery(GET_VACANCY_CATEGORIES_MAIN);
  const { data: stacksData } = useQuery(GET_VACANCY_STACKS);

  return (
    <>
      <CustomHead title={TITLE} description={DESCRIPTION} />
      <Layout greyFooter plainHeader smallPadding isVisible={false}>
        <Main
          data={mock.main}
          quotes={quotesData?.quotes.slice().sort(() => Math.random() - 0.5)}
          banner={bannerData?.banner}
          blogs={blogsData?.blogs}
          teams={teamsData?.teams}
          vacancyCat={vacancyCatData?.vacancy_categories}
          stacks={stacksData?.vacancy_stacks}
        />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  let redirect;
  if (query.p === 'work-with-us') {
    redirect = '/about';
  }
  if (query.p === 'sout') {
    redirect = '/sout.html';
  }
  if (query.p === 'it-evenings') {
    redirect = '/events';
  }
  if (query.p === 'vacancies') {
    redirect = '/vacancies';
  }
  if (query.p === 'contacts') {
    redirect = '/contacts';
  }
  if (query.p === 'internship') {
    redirect = '/internship';
  }
  if (query.p === 'devops-hiring-day') {
    redirect = '/events';
  }
  if (query.p === 'what-we-do') {
    redirect = '/';
  }

  if (redirect) {
    return {
      redirect: {
        statusCode: 301,
        destination: redirect,
      },
    };
  }

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
  await apolloClient.query({
    query: GET_VACANCY_STACKS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
export default mainPage;
