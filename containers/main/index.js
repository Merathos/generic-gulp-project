import {
  Infographics,
  Intro,
  AboutCompany,
  PersonalStories,
  Teams,
  Vacancies,
} from 'containers';
import { RunningText, Gallery } from '../../components';
import { Main as MainContainer, Container, GreyContainer } from './styles';

const Main = ({ data, quotes, banner, blogs, teams, vacancyCat, stacks }) => {
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
      {stacks?.length > 0 && (
        <Container>
          <RunningText data={data.technologies} stacks={stacks} />
        </Container>
      )}
      <Container>
        <AboutCompany data={data.aboutCompany} banner={banner} />
      </Container>
      <Gallery controlsTop />
      {blogs?.length > 0 && (
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
