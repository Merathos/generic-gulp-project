import * as S from './styles';
import { Map } from 'containers';

const OfficesMap = ({ data }) => {
  return (
    <S.Section>
      <S.Container>
        <S.Title>{data.title}</S.Title>
        <S.MapWrapper>
          <Map data={data} />
        </S.MapWrapper>
      </S.Container>
    </S.Section>
  );
};

export default OfficesMap;
