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
    <>
      <GreyContainer>
        <GreyHeader data={data.intro} />
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
        <GreyFooter data={data.intro} />
      </GreyContainer>
    </>
  );
};

export default About;
