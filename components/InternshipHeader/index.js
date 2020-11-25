import * as S from './styles';
import Router from 'next/router';

const handleVacanciesClick = () => {
  Router.push({
    pathname: '/vacancies',
  }).then(() => window.scrollTo(0, 0));
};

const InternshipHeader = ({
  title,
  text,
  picture,
  buttons,
  mobPicture,
  size,
}) => {
  return (
    <S.Grid>
      <S.Wrapper withPicture={!!picture}>
        <S.Title>{title}</S.Title>
        {picture && (
          <S.Block afterTitle={true}>
            <S.Picture
              src={picture}
              srcSet={`${mobPicture} 420w, ${picture}`}
              alt={title}
              width={size?.width}
              height={size?.height}
            />
          </S.Block>
        )}
        <S.Paragraph>{text}</S.Paragraph>
        {buttons && (
          <S.ButtonsWrapper>
            <S.StyledButton accent>{buttons[0]}</S.StyledButton>
            <S.Button onClick={handleVacanciesClick}>{buttons[1]}</S.Button>
          </S.ButtonsWrapper>
        )}
      </S.Wrapper>
      {picture && (
        <S.Block afterTitle={false}>
          <S.Picture
            src={picture}
            alt={title}
            width={size?.width}
            height={size?.height}
          />
        </S.Block>
      )}
    </S.Grid>
  );
};

export default InternshipHeader;
