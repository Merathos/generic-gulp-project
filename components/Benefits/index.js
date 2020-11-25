import { BenefitCard } from 'components';
import * as S from './styles';

const Benefits = ({ data }) => {
  const { title, list } = data;
  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.List>
          {list.map((el, i) => (
            <li key={i}>
              <BenefitCard data={el} />
            </li>
          ))}
        </S.List>
      </S.Container>
    </S.Section>
  );
};

export default Benefits;
