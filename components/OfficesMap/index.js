import { Map } from 'containers';
import { Metro } from 'components';
import { useSelector } from 'react-redux';
import * as S from './styles';

const OfficesMap = ({ data, isContacts, removeMarginBottom }) => {
  const language = useSelector((state) => state.language);

  return (
    <S.Section isContacts={isContacts} removeMarginBottom={removeMarginBottom}>
      <S.StyledContainer>
        <S.Title isContacts={isContacts}>
          {language ? data.titleEn : data.title}
        </S.Title>
        {data.location && (
          <S.Wrapper>
            <S.Place>{data.location}</S.Place>
            <span>{data.adress}</span>
          </S.Wrapper>
        )}
        <S.MapWrapper isContacts={isContacts}>
          <Map data={data} />
        </S.MapWrapper>
        {data.stations && (
          <S.List twoColumns>
            {data.stations.map((el, i) => (
              <li key={i}>
                <Metro data={el} />
              </li>
            ))}
          </S.List>
        )}
      </S.StyledContainer>
    </S.Section>
  );
};

export default OfficesMap;
