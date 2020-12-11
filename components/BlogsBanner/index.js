import Link from 'next/link';
import { Container, Ref, ImageWrapper, Image } from './styles';

const BlogsBanner = ({ data, blogLinkType, banner }) => {
  return (
    <Container bg={data[blogLinkType].bg} blogLinkType={blogLinkType}>
      {banner.link && (banner.text || banner.button_text) && (
        <Link href={banner.link} passHref>
          <Ref>{banner.text || banner.button_text}</Ref>
        </Link>
      )}
      {banner.image && (
        <ImageWrapper>
          <Image
            src={banner.image.path?.normal}
            srcSet={`${banner.image.path?.retina} 2x`}
            alt={banner.text}
            loading="lazy"
          />
        </ImageWrapper>
      )}
    </Container>
  );
};

export default BlogsBanner;
