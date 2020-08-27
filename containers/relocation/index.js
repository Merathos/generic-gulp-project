import {
  Details,
  Values,
  Animation,
  Gallery,
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
        <SectionGroup />
        <Map data={data.map} />
      </Container>

      <GreyContainer>
        <GreyFooter data={data.greyFooter} />
      </GreyContainer>
    </main>
  );
};

export default Relocation;
