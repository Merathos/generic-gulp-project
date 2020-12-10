import Link from 'next/link';
import { Container, Ref, ImageWrapper, Image } from './styles';

const BlogsBanner = ({ data, blogLinkType, banner }) => {
  return (
    <Container bg={data[blogLinkType].bg} blogLinkType={blogLinkType}>
      {banner.link && banner.buttonText && (
        <Link href={banner.link} passHref>
          <Ref>{banner.buttonText}</Ref>
        </Link>
      )}
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
