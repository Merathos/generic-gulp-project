import { IconsList } from 'components';
import { useSelector } from 'react-redux';
import * as S from './styles';

const Conditions = ({ data, back }) => {
  const language = useSelector((state) => state.language);

  return (
    <S.Section>
      <S.H2>{language ? data.titleEn : data.title}</S.H2>
      <IconsList data={back} />
    </S.Section>
  );
};

export default Conditions;
