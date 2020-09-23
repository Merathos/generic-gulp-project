import {
  Details,
  Values,
  Animation,
  Gallery,
  GreyHeader,
  GreyFooter
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer } from './styles';

const About = ({ data }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          <GreyHeader
            title={data.intro.title}
            text={data.intro.text}
            list={data.intro.list}
            sidebar={data.intro.sidebar} />
        </Container>
      </GreyContainer>

      <Container>
        <Details data={data.details} />
        <SectionGroup>
          <Values data={data.values} />
        </SectionGroup>
        <Animation data={data.animation} />
        <Gallery data={data.gallery} />
      </Container>

      <GreyContainer>
        <GreyFooter data={data.greyFooter} />
      </GreyContainer>
    </main>
  );
};

export default About;
