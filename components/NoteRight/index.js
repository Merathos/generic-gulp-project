import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Subtitle from 'elements/Subtitle';
import TitleH4 from 'elements/TitleH4';
import ArrowRight from 'public/icons/arrow-right.svg';

const Card = styled.div`
  background-color: #F7F8F9;
  padding: 30px 30px 65px 85px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: url('/images/yellow-circle.svg');
  background-repeat: no-repeat;
  background-position: 40px bottom;
  min-height: 280px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
    background-position: left 10px;
    padding: 30px 30px 40px;
    background-image: url('/images/blue-rectangle-mobile.svg');
    min-height: 0;
  }
`;

const Img = styled.img`
  max-width: 120px;
  margin-right: 30px;

  @media screen and (max-width: 420px) {
    max-width: 74px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 25px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 244px;
`;

const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  margin-left: 33px;
  display: block;

  @media screen and (max-width: 420px) {
    margin-left: auto;
  }
`;

const H4 = styled(TitleH4)`
  min-width: 221px;
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;

const NoteRight = props => {
  const {
    data: { src, subtitle, title }
  } = props;
  return (
    <Card>
      <Container>
        <Img src={src} alt={title} />
        <Wrapper>
          <StyledSubtitle content={subtitle} />
          <H4 content={title} />
        </Wrapper>
      </Container>
      <Link href="/about">
        <StyledLink>
          <ArrowRight />
        </StyledLink>
      </Link>
    </Card>
  );
};

NoteRight.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default NoteRight;
