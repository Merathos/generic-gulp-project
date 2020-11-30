import { GreyHeader, OfficesMap } from 'components';
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
            isContacts
          />
        </Container>
      </GreyContainer>
      {data.offices.map((el, i) => (
        <OfficesMap key={i} data={el} isContacts />
      ))}
    </Main>
  );
};

export default Contacts;
