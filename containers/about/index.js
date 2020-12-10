import {
  Details,
  Values,
  Gallery,
  AboutHeader,
  GreyFooter,
  RunningText,
} from 'components';

import {
  Container,
  GreyContainer,
  HeaderContainer,
  Main,
  ValuesSection,
} from './styles';

const About = ({ data }) => {
  return (
    <Main>
      <HeaderContainer>
        <Container>
          <AboutHeader
            title={data.intro.title}
            text={data.intro.text}
            list={data.intro.list}
            sidebar={data.intro.sidebar}
            logo={data.intro.logo}
          />
        </Container>
      </HeaderContainer>
      <Container>
        <Details data={data.details} />
      </Container>
      <ValuesSection>
        <Container>
          <Values data={data.values} />
        </Container>
      </ValuesSection>
      <Container>
        <RunningText data={data.technologies} />
      </Container>
      <Gallery data={data.gallery} />
      <GreyContainer>
        <GreyFooter data={data.greyFooter} type="about" />
      </GreyContainer>
    </Main>
  );
};

export default About;
