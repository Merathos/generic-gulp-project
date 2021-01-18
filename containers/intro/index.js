import { MarkerList, PortraitSlider } from 'components';
import * as S from './styles';
import Router from 'next/router';

const Intro = ({ data, quotes }) => {
  const handleVacanciesClick = () => {
    Router.push({
      pathname: '/vacancies',
    }).then(() => window.scrollTo(0, 0));
  };

  return (
    <S.Container>
      <S.TextBlock>
        <S.Title>{data.title}</S.Title>
        <S.Text>{data.text}</S.Text>
        <S.ListBlock>
          <MarkerList
            type="ellipse"
            inline="true"
            data={data.communicationsList}
          />
        </S.ListBlock>
        <S.Button accent="accent" onClick={handleVacanciesClick}>
          {data.buttonText}
        </S.Button>
      </S.TextBlock>
      {quotes?.length > 0 && (
        <S.PortraitBlock>
          <PortraitSlider quotes={quotes} />
        </S.PortraitBlock>
      )}
    </S.Container>
  );
};

export default Intro;
