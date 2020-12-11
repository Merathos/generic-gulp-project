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

const Main = ({ data, quotes, banner, blogs, teams, vacancyCat }) => {
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
      {blogs.length > 0 && (
        <GreyContainer>
          <Container>
            <PersonalStories blogs={blogs} />
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
          <Vacancies vacancyCat={vacancyCat} />
        </Container>
      </GreyContainer>
    </MainContainer>
  );
};

export default Main;
