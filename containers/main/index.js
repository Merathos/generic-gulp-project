import {
  Infographics,
  Intro,
  AboutCompany,
  PersonalStories,
  Teams,
} from 'containers';
import { Main as MainContainer, Container, GreyContainer } from './styles';

const Main = ({ data, storiesData, teams }) => {
  return (
    <MainContainer>
      <GreyContainer>
        <Container>
          {/*<Head>*/}
          {/*  <meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}
          {/*</Head>*/}
          <Intro data={data.intro} />
        </Container>
      </GreyContainer>
      <Container>
        <Infographics data={data.infographics} />
      </Container>
      <Container>
        <AboutCompany data={data.aboutCompany} />
      </Container>
      {data.hasStories && (
        <GreyContainer>
          <Container>
            <PersonalStories data={storiesData} />
          </Container>
        </GreyContainer>
      )}
      {data.hasTeams && (
        <Container>
          <Teams data={teams} />
        </Container>
      )}
      <GreyContainer>
        <Container>{/*<Vacancies />*/}</Container>
      </GreyContainer>
    </MainContainer>
  );
};

export default Main;
