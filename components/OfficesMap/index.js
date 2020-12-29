import { Map } from 'containers';
import { Metro } from 'components';
import { useSelector } from 'react-redux';
import * as S from './styles';

const OfficesMap = ({ data, isContacts, english }) => {
  const language = useSelector(state => state.language);

  return (
    <S.Section isContacts={isContacts}>
      <S.Container>
        <S.Title isContacts={isContacts}>
          {english && language ? 'Our offices' : data.title}
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
      </S.Container>
    </S.Section>
  );
};

export default OfficesMap;
