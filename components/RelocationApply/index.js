import * as S from './styles';
import Router from 'next/router';

const RelocationApply = ({ data }) => {
  const { title, text, button, picture } = data;

  const handleVacanciesClick = () => {
    Router.push({
      pathname: '/vacancies',
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.PicWrapper>
          <img src={picture} alt="promo" width="200" height="400" />
        </S.PicWrapper>
        <S.Content>
          <S.Text>{text}</S.Text>
          <S.Button accent={true} onClick={handleVacanciesClick}>
            {button}
          </S.Button>
        </S.Content>
      </S.Container>
    </S.Section>
  );
};

export default RelocationApply;
