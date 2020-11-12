import { useSelector } from 'react-redux';
import * as S from './styles';

const Application = ({ data, decor, className }) => {
  const english = useSelector(state => state.english);
  const { text, picture, email } = data;
  return (
    <S.Section className={className}>
      <S.Wrapper decor={decor}>
        <S.H2>{english ? 'Apply' : data.title}</S.H2>
        {text && <S.Text>{text}</S.Text>}
        {email && (
          <S.Text>
            Тогда оправляй резюме на <a href="#">{email}</a> или заполни форму
            на сайте.
          </S.Text>
        )}
        <S.StyledButton type="accent">
          {english ? 'Send CV' : data.button}
        </S.StyledButton>
        {picture && <S.Picture src={picture} alt="apply" />}
      </S.Wrapper>
    </S.Section>
  );
};

export default Application;
