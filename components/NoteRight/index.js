import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import {
  Card,
  StyledLink,
  Container,
  Img,
  Wrapper,
  StyledSubtitle,
  H4,
} from './styles';

const NoteRight = (props) => {
  const {
    data: { preview, title, slug },
  } = props;
  return (
    <Link href={`/blog/${slug}`}>
      <Card>
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
            <StyledSubtitle>Следующая статья</StyledSubtitle>
            {title && <H4>{title}</H4>}
          </Wrapper>
        </Container>
        <StyledLink>
          <ArrowRight />
        </StyledLink>
      </Card>
    </Link>
  );
};

export default NoteRight;
