import Intro from '../intro';
import { Container, GreyContainer } from './styles';

const Main = ({ data }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          {/*<Head>*/}
          {/*  <meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}
          {/*</Head>*/}
          <Intro data={data} />
        </Container>
      </GreyContainer>
      <Container>{/*<Infographics />*/}</Container>
      <Container>{/*<AboutUs />*/}</Container>
      <GreyContainer>
        <Container>{/*<PersonalStory />*/}</Container>
      </GreyContainer>
      <Container>{/*<Teams />*/}</Container>
      <GreyContainer>
        <Container>{/*<Vacancies />*/}</Container>
      </GreyContainer>
    </main>
  );
};

export default Main;
