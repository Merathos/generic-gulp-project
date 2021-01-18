import { CloseBtn } from 'elements';
import * as S from './styles';

const FormError = ({ data, close }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <CloseBtn onClick={close} />
        <S.Content>
          <S.Title>{data.title}</S.Title>
          <S.Text>{data.text}</S.Text>
          <S.Btn onClick={close}>{data.btnText}</S.Btn>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default FormError;
