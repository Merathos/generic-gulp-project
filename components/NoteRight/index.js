import PropTypes from 'prop-types';
import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import {
  Card,
  StyledLink,
  Container,
  Img,
  Wrapper,
  StyledSubtitle,
  H4
} from './styles';

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
