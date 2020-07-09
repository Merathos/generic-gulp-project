import { Layout } from 'containers';
import styled from 'styled-components';
import {
  GreyTitle,
  Paragraph,
  SidebarRelocation,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application
} from 'components';

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

const GreyContainer = styled.div`
  background-color: #F7F8F9;
  background-image: url('backgrounds/vacancy-grey-title.svg');
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
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
  justify-content: space-between;
  align-items: center;

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

const vacancyPage = () => {
  return (
  <Layout backButton>
    <GreyContainer>
      <GreyTitle data={mock.vacancy.mainTitle} />
    </GreyContainer>
    <Container>
      <Paragraph bold="700" data={mock.vacancy.intro} />
      <Grid>
        <Article>
          <Requirements type="ellipse" data={mock.vacancy.requirements} />
        </Article>
        <Aside>
          <SidebarSlider data={mock.vacancy.sidebarSlider} />
        </Aside>
      </Grid>
      <Grid>
        <Article>
          <Requirements type="number" data={mock.vacancy.extraRequirements} />
        </Article>
        <Aside>
          <SidebarRelocation data={mock.vacancy.sidebarArticle} />
        </Aside>
      </Grid>
      <Article>
        <Paragraph size="h2" data={mock.vacancy.qualifications} />
        <Conditions data={mock.vacancy.conditions} />
      </Article>
      <SliderVacancy data={mock.vacancy.steps} />
    </Container>
    <Application data={mock.vacancy.application} />
    <Container>
      <Map data={mock.vacancy.map} />
      <Articles type="vacancy" data={mock.vacancy.vacancies} />
    </Container>
  </Layout>
  )
};

export default vacancyPage;
