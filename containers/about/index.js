import {
  Details,
  Values,
  Gallery,
  AboutHeader,
  GreyFooter,
  RunningText,
} from 'components';

import greyFooterMock from 'mock/greyFooter';
import {
  Container,
  GreyContainer,
  HeaderContainer,
  Main,
  ValuesSection,
} from './styles';

const About = ({ data, stacks }) => {
  return (
    <Main>
      <HeaderContainer>
        <Container header>
          <AboutHeader
            title={data.intro.title}
            text={data.intro.text}
            list={data.intro.list}
            sidebar={data.intro.sidebar}
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
      {stacks?.length > 0 && (
        <Container>
          <RunningText data={data.technologies} stacks={stacks} />
        </Container>
      )}
      <Gallery title={data.gallery.title} subtitle={data.gallery.subtitle} />
      <GreyContainer>
        <GreyFooter data={greyFooterMock.greyFooter} type="about" />
      </GreyContainer>
    </Main>
  );
};

export default About;
