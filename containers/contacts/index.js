import { GreyHeader, OfficesMap } from 'components';
import { Main, StyledContainer, GreyContainer } from './styles';

const Contacts = ({ data }) => {
  return (
    <Main>
      <GreyContainer>
        <StyledContainer>
          <GreyHeader
            title={data.mainTitle.title}
            text={data.mainTitle.text}
            list={data.mainTitle.list}
            twoColumns
            isContacts
          />
        </StyledContainer>
      </GreyContainer>
      {data.offices.map((el, i) => (
        <OfficesMap key={i} data={el} isContacts />
      ))}
    </Main>
  );
};

export default Contacts;
