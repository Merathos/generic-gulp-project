import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';

const Section = styled.section`
  display: flex;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const Blockquote = styled.blockquote`
  font-weight: bold;
  font-size: 34px;
  line-height: 120%;
  margin-bottom: 60px;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 120%;
  }
`;

const Span = styled.span`
  font-weight: 800;
  font-size: 54px;
  color: #2F8ED9;
  margin-right: 30px;

  @media screen and (max-width: 420px) {
    margin-right: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;

const Img = styled.img`
  width: 67px;
  margin-right: 14px;
`;

const Quote = props => {
  const {
    data: { src, name, company, text }
  } = props;
  return (
    <Section>
      <Span>«</Span>
      <Blockquote>
        <p>{text}</p>
        <Container>
          <Img src={src} alt={name} />
          <div>
            <TitleH5 content={name} />
            <Subtitle content={company} />
          </div>
        </Container>
      </Blockquote>
    </Section>
  );
};

Quote.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Quote;
