import { InfographicsList } from 'components';
import * as S from './styles';

const Infographics = ({ data }) => {
  return (
    <S.Container>
      {data.titles.map((item, index) => (
        <S.H2 key={index}>{item}</S.H2>
      ))}
      <S.InfographicsContainer>
        <InfographicsList data={data.infographicsData} />
      </S.InfographicsContainer>
    </S.Container>
  );
};

export default Infographics;
