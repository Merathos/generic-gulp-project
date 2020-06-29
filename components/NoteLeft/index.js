import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Subtitle from 'elements/Subtitle';
import TitleH4 from 'elements/TitleH4';
import ArrowLeft from 'public/icons/arrow-left.svg';

const Card = styled.div`
  /* background: linear-gradient(0deg, #f7f8f9, #f7f8f9), #201f2a; */
  background-color: #fafafa;
  padding: 30px 30px 65px;
  display: flex;
  box-sizing: border-box;
  justify-content: ${props => props.position || 'flex-start'};
  background-image: url('/images/blue-rectangle.svg');
  background-repeat: no-repeat;
  background-position: 20px bottom;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const H4 = styled(TitleH4)`
  min-width: 221px;
`;

const Img = styled.img`
  max-width: 120px;
  margin-right: 30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 244px;
`;
const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  display: block;
`;

const NoteLeft = props => {
  const {
    data: { src, subtitle, title }
  } = props;
  return (
    <Card>
      <Link href="/about">
        <StyledLink>
          <ArrowLeft />
        </StyledLink>
      </Link>
      <Container>
        <Img src={src} alt={title} />
        <Wrapper>
          <Subtitle content={subtitle} />
          <H4 content={title} />
        </Wrapper>
      </Container>
    </Card>
  );
};

NoteLeft.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default NoteLeft;
