import { Layout } from 'containers';
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';
import { Cards, SidebarArticle } from 'components';
import { TitleH1 } from 'elements';
import { Search, Filter } from 'forms';
import { ALL_CHARACTERS } from 'graphql/allCharacters';

import mock from 'mock/index';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

const Article = styled.article`
  max-width: 854px;

  @media screen and (max-width: 420px) {
    /* margin-right: 0; */
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
  padding-top: 200px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  max-width: 254px;
  margin-right: 90px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

const Title = styled(TitleH1)`
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const catalogPage = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Layout backButton>
      <Container>
        <Grid>
          <Article>
            <Title content={mock.catalog.mainTitle} />
            <Search data={mock.catalog.search} />
            <Cards data={mock.catalog.cards} />
          </Article>
          <Aside>
            <Filter data={mock.catalog.filter} />
            <SidebarArticle type="button" data={mock.catalog.article} />
          </Aside>
        </Grid>
      </Container>
    </Layout>
  );
};

export default catalogPage;
