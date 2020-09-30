import PropTypes from 'prop-types';
import Link from 'next/link';
import ArrowLeft from 'public/icons/arrow-left.svg';
import {
  Card,
  StyledLink,
  Container,
  Img,
  Wrapper,
  StyledSubtitle,
  H4
} from './styles';

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
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <H4>{title}</H4>
        </Wrapper>
      </Container>
    </Card>
  );
};

NoteLeft.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default NoteLeft;
