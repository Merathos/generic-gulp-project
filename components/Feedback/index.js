import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  background-image: url('backgrounds/circle.png');
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
    data: { src, src_mob, name, company, text }
  } = props;
  return (
    <Section>
      <picture>
        <source srcSet={src} type="image/png" media="(min-width: 420px)" />
        <Img src={src_mob} alt={name} />
      </picture>
      <div>
        <StyledSubtitle content={company} />
        <H3 content={name} />
        <StyledText>{text}</StyledText>
      </div>
    </Section>
  );
};

Feedback.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Feedback;
