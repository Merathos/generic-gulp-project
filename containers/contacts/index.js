import { GreyHeader, Map } from 'components';
import { SectionGroup } from 'containers';
import { Main, Container, GreyContainer } from './styles';

const Contacts = ({ data }) => {
  return (
    <Main>
      <GreyContainer>
        <Container>
          <GreyHeader
            title={data.mainTitle.title}
            text={data.mainTitle.text}
            list={data.mainTitle.list}
            twoColumns
          />
        </Container>
      </GreyContainer>

      <Container>
        {data.offices.map((el, i) => (
          <SectionGroup key={i}>
            <Map key={i} data={el} twoColumns />
          </SectionGroup>
        ))}
      </Container>
    </Main>
  );
};

export default Contacts;
