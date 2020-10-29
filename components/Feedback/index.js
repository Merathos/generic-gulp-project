import styled from 'styled-components';
import TitleH3 from 'elements/TitleH3';
import Subtitle from 'elements/Subtitle';

const Img = styled.img`
  width: 404px;
  margin-right: 70px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    width: 200px;
    margin-bottom: 20px;
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  line-height: 158%;
`;

const Section = styled.section`
  display: flex;
  margin-bottom: 100px;
  align-items: flex-end;
  background-image: url('/backgrounds/circle.png');
  background-repeat: no-repeat;
  background-position: 310px top;
  padding-top: 90px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
    background-size: 112px 112px;
    background-position: 140px top;
    padding-top: 60px;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 7px;
  }
`;

const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;

const Feedback = props => {
  const {
    data: { imageUrl, title, describe }
  } = props;
  return (
    <Section>
      <picture>
        <source
          srcSet={`https://api.develop.dins.d.nimax.ru/${imageUrl}`}
          type="image/png"
          media="(min-width: 420px)"
        />
        <Img
          src={`https://api.develop.dins.d.nimax.ru/${imageUrl}`}
          alt={title}
        />
      </picture>
      <div>
        <StyledSubtitle>Компания Динс</StyledSubtitle>
        <H3>{title}</H3>
        <StyledText>{describe}</StyledText>
      </div>
    </Section>
  );
};

export default Feedback;
