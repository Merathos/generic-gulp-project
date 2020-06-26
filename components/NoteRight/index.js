import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Subtitle from 'elements/Subtitle';
import TitleH4 from 'elements/TitleH4';
import ArrowRight from 'public/icons/arrow-right.svg';

const Card = styled.div`
  background: linear-gradient(0deg, #f7f8f9, #f7f8f9), #201f2a;
  padding: 30px 30px 65px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
    flex-direction: column-reverse;
    padding-bottom: 40px;
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

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
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
  max-width: 221px;
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
          <Subtitle content={subtitle} />
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
