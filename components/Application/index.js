import { useSelector } from 'react-redux';
import * as S from './styles';

const Application = ({
  data,
  decor,
  type,
  handleVacanciesClick,
  className,
  vacancy,
}) => {
  const english = useSelector(state => state.english);
  const { text, picture } = data;
  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  let updatedText;
  if (text) {
    updatedText = text.replace(
      emailRegExp,
      email => `<a href="mailto:${email}">${email}</a>`
    );
  }
  return (
    <S.Section className={className}>
      <S.Wrapper decor={decor} type={type} vacancy={vacancy}>
        <S.H2 vacancy={vacancy}>{english ? 'Apply' : data.title}</S.H2>
        {text && <S.Text dangerouslySetInnerHTML={{ __html: updatedText }} />}
        <S.StyledButton
          type="accent"
          usage={type}
          onClick={type === 'relocation' ? handleVacanciesClick : undefined}
        >
          {english ? 'Send CV' : data.button}
        </S.StyledButton>
        {picture && <S.Picture src={picture} alt="apply" />}
      </S.Wrapper>
    </S.Section>
  );
};

export default Application;
