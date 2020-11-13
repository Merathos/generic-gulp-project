import { useSelector } from 'react-redux';
import * as S from './styles';

const Application = ({ data, decor, className }) => {
  const english = useSelector(state => state.english);
  const { text, picture } = data;
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  const updatedText = text.replace(
    emailRegExp,
    email => `<a href="mailto:${email}">${email}</a>`
  );

  return (
    <S.Section className={className}>
      <S.Wrapper decor={decor}>
        <S.H2>{english ? 'Apply' : data.title}</S.H2>
        {text && <S.Text dangerouslySetInnerHTML={{ __html: updatedText }} />}
        <S.StyledButton type="accent">
          {english ? 'Send CV' : data.button}
        </S.StyledButton>
        {picture && <S.Picture src={picture} alt="apply" />}
      </S.Wrapper>
    </S.Section>
  );
};

export default Application;
