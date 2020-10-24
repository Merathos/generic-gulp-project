import { Container, Link, ImageWrapper, Image } from './styles';

const BlogsBanner = ({ data, blogLinkType }) => {
  return (
    <Container bg={data[blogLinkType].bg} blogLinkType={blogLinkType}>
      <Link>{data[blogLinkType].buttonText}</Link>
      <ImageWrapper>
        <Image src={data[blogLinkType].image} blogLinkType={blogLinkType} />
      </ImageWrapper>
    </Container>
  );
};

export default BlogsBanner;
