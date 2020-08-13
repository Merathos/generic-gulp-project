import { Layout } from 'containers';
import { useQuery } from '@apollo/react-hooks';
import mock from 'mock/index';
import { GET_CONTENT, GET_FILTER_SEARCH } from 'graphql/query';
import { initializeApollo } from 'lib/apollo';
import { Cards, SidebarArticle } from 'components';
import { Search, Filter } from 'forms';
import {
  Container,
  Article,
  Grid,
  Title,
  Aside
} from './styles/catalog.styles';

const catalogPage = ({ vacancies }) => {
  return (
    <Layout backButton>
      <Container>
        <Grid>
          <Aside>
            <Filter data={mock.catalog.filter} />
            <SidebarArticle type="button" data={mock.catalog.article} />
          </Aside>
          <Article>
            <Title content={mock.catalog.mainTitle} />
            <Search data={mock.catalog.search} />
          </Article>
          <Cards data={vacancies} />
        </Grid>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const {
    data: { vacancies }
  } = await apolloClient.query({
    query: GET_CONTENT
  });

  return {
    props: {
      vacancies
    }
  };
}

export default catalogPage;
