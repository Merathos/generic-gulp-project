import * as S from './styles';
import { CloseBtn } from 'elements';

const Confirmation = ({ data, closeModal }) => {
  return (
    <S.Container>
      <CloseBtn onClick={closeModal} />
      <S.Title>{data.title}</S.Title>
      <S.Text>{data.text}</S.Text>
      <S.Btn onClick={closeModal} >{data.btnText}</S.Btn>
    </S.Container>
  );
};

export default Confirmation;