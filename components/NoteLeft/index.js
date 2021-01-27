import Link from 'next/link';
import ArrowLeft from 'public/icons/arrow-left.svg';
import {
  Card,
  StyledLink,
  Container,
  Img,
  Wrapper,
  StyledSubtitle,
  H4,
} from './styles';

const NoteLeft = (props) => {
  const {
    data: { preview, title, slug },
  } = props;
  return (
    <Link href={`/blog/${slug}`}>
      <Card>
        <StyledLink>
          <ArrowLeft />
        </StyledLink>
        <Container>
          {preview && (
            <Img
              src={preview.path?.normal}
              srcSet={`${preview.path?.retina} 2x`}
              alt={title}
              loading="lazy"
            />
          )}
          <Wrapper>
            <StyledSubtitle>Предыдущая статья</StyledSubtitle>
            {title && <H4>{title}</H4>}
          </Wrapper>
        </Container>
      </Card>
    </Link>
  );
};

export default NoteLeft;
