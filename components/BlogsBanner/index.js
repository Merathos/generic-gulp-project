import { Container, Link, ImageWrapper, Image } from './styles';

const BlogsBanner = ({ data, blogLinkType }) => {
  return (
    <Container bg={data[blogLinkType].bg} blogLinkType={blogLinkType}>
      <Link href="#">{data[blogLinkType].buttonText}</Link>
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
