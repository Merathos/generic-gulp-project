import {
  Advantages,
  Application,
  Blogs,
  GreyHeader,
  GreyFooter,
  Map
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer } from './styles';

const Relocation = ({ data, blogs }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          <GreyHeader data={data.intro} />
        </Container>
      </GreyContainer>

      <Container>
        <SectionGroup>
          <Advantages data={data.advantages} />
        </SectionGroup>
      </Container>

      <Application data={data.promo} />

      <Container>
        <SectionGroup>
          <Blogs mock={data.blogs} back={blogs} />
        </SectionGroup>
        <SectionGroup>
          <Map data={data.map} />
        </SectionGroup>
      </Container>

      <GreyContainer>
        <GreyFooter data={data.greyFooter} />
      </GreyContainer>
    </main>
  );
};

export default Relocation;
