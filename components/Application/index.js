import { Button } from 'elements';
import * as S from './styles';

const Application = ({ data, decor }) => {
  const { title, text, button, button2, picture } = data;
  return (
    <S.Section>
      <S.Wrapper decor={decor}>
        <S.H2>{title}</S.H2>
        {text && <S.Text>{text}</S.Text>}
        <S.Container>
          <S.StyledButton type="accent">{button}</S.StyledButton>
          {button2 && <Button>{button2}</Button>}
        </S.Container>
        {picture && <S.Picture src={picture} alt={title} />}
      </S.Wrapper>
    </S.Section>
  );
};

export default Application;
