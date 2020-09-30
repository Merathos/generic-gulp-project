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
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <H4>{title}</H4>
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

export default NoteRight;
