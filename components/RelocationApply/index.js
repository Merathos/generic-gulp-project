import Router from 'next/router';
import * as S from './styles';

const RelocationApply = ({ data }) => {
  const { title, text, button, picture } = data;

  const handleVacanciesClick = () => {
    Router.push({
      pathname: '/vacancies',
    }).then(() => window.scrollTo(0, 0));
  };

  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  let updatedText;

  if (text) {
    updatedText = text.replace(
      emailRegExp,
      email => `<a href="mailto:${email}">${email}</a>`
    );
  }

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.PicWrapper>
          <img src={picture} alt="promo" width="200" height="400" />
        </S.PicWrapper>
        <S.Content>
          {text && <S.Text dangerouslySetInnerHTML={{ __html: updatedText }} />}
          <S.Button accent onClick={handleVacanciesClick}>
            {button}
          </S.Button>
        </S.Content>
      </S.Container>
    </S.Section>
  );
};

export default RelocationApply;
