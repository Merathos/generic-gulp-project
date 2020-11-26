import * as S from './styles';
import { Map } from 'containers';
import { Metro } from 'components';

const OfficesMap = ({ data, isContacts }) => {
  return (
    <S.Section>
      <S.Container>
        <S.Title>{data.title}</S.Title>
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
          <S.List twoColumns={true}>
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
