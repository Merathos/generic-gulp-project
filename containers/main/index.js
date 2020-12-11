import {
  Infographics,
  Intro,
  AboutCompany,
  PersonalStories,
  Teams,
  Vacancies,
} from 'containers';
import { RunningText } from '../../components';
import { Main as MainContainer, Container, GreyContainer } from './styles';

const Main = ({ data, storiesData, quotes, banner, teams }) => {
  return (
    <MainContainer>
      <GreyContainer>
        <Container>
          <Intro data={data.intro} quotes={quotes} />
        </Container>
      </GreyContainer>
      <Container>
        <Infographics data={data.infographics} />
      </Container>
      <Container>
        <RunningText data={data.technologies} />
      </Container>
      <Container>
        <AboutCompany data={data.aboutCompany} banner={banner} />
      </Container>
      {data.hasStories && (
        <GreyContainer>
          <Container>
            <PersonalStories data={storiesData} />
          </Container>
        </GreyContainer>
      )}
      {teams?.length > 0 && (
        <Container>
          <Teams teams={teams} />
        </Container>
      )}
      <GreyContainer>
        <Container>
          <Vacancies data={data.vacancies} />
        </Container>
      </GreyContainer>
    </MainContainer>
  );
};

export default Main;
