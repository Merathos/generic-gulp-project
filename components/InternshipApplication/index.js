import * as S from './styles';

const InternshipApplication = ({ data }) => {
  const { text, title, button } = data;

  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  let updatedText;
  if (text) {
    updatedText = text.replace(
      emailRegExp,
      email => `<a href="mailto:${email}">${email}</a>`
    );
  }

  const handleClick = () => {};

  return (
    <S.Section>
      <S.Wrapper>
        <S.H2>{title}</S.H2>
        {text && <S.Text dangerouslySetInnerHTML={{ __html: updatedText }} />}
        <S.StyledButton accent="accent" onClick={handleClick}>
          {button}
        </S.StyledButton>
      </S.Wrapper>
    </S.Section>
  );
};

export default InternshipApplication;
