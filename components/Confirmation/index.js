import { CloseBtn } from 'elements';
import * as S from './styles';

const Confirmation = ({ data, closeSuccess }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <CloseBtn onClick={closeSuccess} />
        <S.Content>
          <S.Title>{data.title}</S.Title>
          <S.Text>{data.text}</S.Text>
          <S.Btn onClick={closeSuccess}>{data.btnText}</S.Btn>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Confirmation;
