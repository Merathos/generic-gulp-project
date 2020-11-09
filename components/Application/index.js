import { useSelector } from 'react-redux';
import * as S from './styles';

const Application = ({ data, decor }) => {
  const english = useSelector(state => state.english);
  const { text, picture } = data;
  return (
    <S.Section>
      <S.Wrapper decor={decor}>
        <S.H2>{english ? 'Apply' : data.title}</S.H2>
        {text && <S.Text>{text}</S.Text>}
        <S.StyledButton type="accent">
          {english ? 'Send CV' : data.button}
        </S.StyledButton>
        {picture && <S.Picture src={picture} alt="apply" />}
      </S.Wrapper>
    </S.Section>
  );
};

export default Application;
