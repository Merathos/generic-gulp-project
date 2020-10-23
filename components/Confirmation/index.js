import * as S from './styles';
import { CloseBtn } from 'elements';

const Confirmation = ({ data, closeSuccess }) => {
  return (
    <S.Container>
      <CloseBtn onClick={closeSuccess} />
      <S.Title>{data.title}</S.Title>
      <S.Text>{data.text}</S.Text>
      <S.Btn onClick={closeSuccess}>{data.btnText}</S.Btn>
    </S.Container>
  );
};

export default Confirmation;