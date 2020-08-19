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

const Contacts = ({ data }) => {
  return (
    <main>
      <GreyContainer>
        <Container>
          <GreyHeader data={data.mainTitle} />
        </Container>
      </GreyContainer>

      <Container>
        {data.offices.map((el, i) => (
          <SectionGroup><Map key={i} data={el} /></SectionGroup>
        ))}
      </Container>
    </main>
  );
};

export default Contacts;
