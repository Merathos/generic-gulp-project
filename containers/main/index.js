import { Infographics, Intro, AboutCompany } from 'containers';
import { Main as MainContainer, Container, GreyContainer } from './styles';

const Main = ({ data }) => {
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
      <GreyContainer>
        <Container>{/*<PersonalStory />*/}</Container>
      </GreyContainer>
      <Container>{/*<Teams />*/}</Container>
      <GreyContainer>
        <Container>{/*<Vacancies />*/}</Container>
      </GreyContainer>
    </MainContainer>
  );
};

export default Main;
