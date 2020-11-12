import {
  Advantages,
  Application,
  Blogs,
  GreyHeader,
  GreyFooter,
  Map,
} from 'components';
import { SectionGroup } from 'containers';
import { Container, GreyContainer } from './styles';

const Relocation = ({ data, blogs }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          <GreyHeader
            title={data.intro.title}
            text={data.intro.text}
            list={data.intro.list}
            picture={data.intro.picture}
            mobPicture={data.intro.mobPicture}
            hash="relocation"
            twoColumns
          />
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
