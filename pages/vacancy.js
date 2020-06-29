import { initializeStore } from 'lib/redux';
import { initializeApollo } from 'lib/apollo';
import { Layout } from 'containers';
import styled from 'styled-components';
import {
  GreyTitle,
  Paragraph,
  SidebarArticle,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application
} from 'components';

import Text from 'elements/Text';

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

const GreyContainer = styled.main`
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
`;

const Article = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

const Grid = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  max-width: 254px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

const vacancyPage = () => (
  <Layout backButton>
    <GreyContainer>
      <GreyTitle data={mock.vacancy.mainTitle} />
    </GreyContainer>
    <Container>
      <Text bold="700" content={mock.vacancy.intro} />
      <Grid>
        <Article>
          <Requirements data={mock.vacancy.requirements} />
          {/* <TitleH2 data={mock.vacancy.requirements.title} />
          <List type="ellipse" position="column" data={mock.vacancy.requirements.list} /> */}
        </Article>
        <Aside>
          <SidebarSlider data={mock.vacancy.requirements} />
        </Aside>
      </Grid>
      <Grid>
        <Article>
          <Requirements data={mock.vacancy.extraRequirements} />
          {/* <TitleH2 data={mock.vacancy.requirements.title} />
          <List  type="ellipse" position="column" data={mock.vacancy.requirements.list} /> */}
        </Article>
        <Aside>
          <SidebarArticle data={mock.vacancy.qualifications} />
        </Aside>
      </Grid>
      <Paragraph size="h2" data={mock.article.definitions} />
      <Conditions />
      {/* <List position="row" type="icon" data={mock.article.reductions} /> */}
      <SliderVacancy data={mock.vacancy.steps} />
      <Application data={mock.vacancy.application} />
      <Map data={mock.vacancy.map} />
      <Articles data={mock.vacancy.articles} />
    </Container>
  </Layout>
);

export async function getStaticProps() {
  const reduxStore = initializeStore()
  const apolloClient = initializeApollo()

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1
  }
};


export default vacancyPage;
