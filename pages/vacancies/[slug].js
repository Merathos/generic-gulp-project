import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { Layout, CustomHead, Vacancy } from 'containers';
import { GET_VACANCY_CONTENT } from 'graphql/vacancy';
import { initializeApollo } from 'lib/apollo';
import Head from 'next/head';

import mock from 'mock/vacancy';

const TITLE = 'Вакансия в компании DINS';
const DESCRIPTION =
  'Активная вакансия в компании DINS. Откликнуться на вакансию.';

const vacancyPage = () => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useDispatch();

  const { data: vacanciesData } = useQuery(GET_VACANCY_CONTENT, {
    variables: {
      slug: query.slug,
      is_preview: query.preview === 'true',
    },
  });
  const vacancy = vacanciesData?.vacancies[0] || {};

  useEffect(() => {
    if (vacanciesData && Object.keys(vacancy).length === 0) router.push('/404');
  }, [vacanciesData, vacancy]);

  if (Object.keys(vacancy).length === 0) return null;

  dispatch({
    type: 'LANGUAGE',
    payload: vacancy?.is_english_speaking_team, // && vacancy?.is_translate,
  });

  return (
    <>
      {vacancy?.name ? (
        <CustomHead
          title={`Вакансия ${vacancy?.name} в компании DINS`}
          description={`Активная вакансия в компании DINS: ${vacancy?.name}. Откликнуться на вакансию.`}
        />
      ) : (
        <CustomHead title={TITLE} description={DESCRIPTION} />
      )}
      <Head>
        {query.preview === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      <Layout backButton>
        <Vacancy data={mock} back={vacancy} />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_VACANCY_CONTENT,
    variables: { slug: query.slug, is_preview: query.preview === 'true' },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default vacancyPage;
