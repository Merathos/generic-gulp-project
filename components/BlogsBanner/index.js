import { Container, Ref, ImageWrapper, Image } from './styles';
import Link from 'next/link';

const BlogsBanner = ({ data, blogLinkType }) => {
  return (
    <Container bg={data[blogLinkType].bg} blogLinkType={blogLinkType}>
      <Link href="/" passHref>
        <Ref>{data[blogLinkType].buttonText}</Ref>
      </Link>
      <ImageWrapper>
        <Image
          src={data[blogLinkType].image}
          blogLinkType={blogLinkType}
          alt={data[blogLinkType].buttonText}
        />
      </ImageWrapper>
    </Container>
  );
};

export default BlogsBanner;
