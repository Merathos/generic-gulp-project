import {
  Details,
  Values,
  Gallery,
  GreyHeader,
  GreyFooter,
  RunningText,
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer, HeaderContainer, Main } from './styles';

const About = ({ data }) => {
  return (
    <Main>
      <HeaderContainer>
        <Container>
          <GreyHeader
            title={data.intro.title}
            text={data.intro.text}
            list={data.intro.list}
            sidebar={data.intro.sidebar}
          />
        </Container>
      </HeaderContainer>

      <Container>
        <Details data={data.details} />
        <SectionGroup>
          <Values data={data.values} />
        </SectionGroup>
        <RunningText data={data.technologies} />
      </Container>
      <Gallery data={data.gallery} />
      <GreyContainer>
        <GreyFooter data={data.greyFooter} />
      </GreyContainer>
    </Main>
  );
};

export default About;
