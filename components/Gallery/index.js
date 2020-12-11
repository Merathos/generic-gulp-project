import { AboutSlider } from 'components';
import galleryData from 'mock/gallery';
import { Title, Wrapper } from './styles';

const Gallery = ({ title, subtitle, controlsTop }) => {
  return (
    <Wrapper controlsTop={controlsTop}>
      {title && <Title>{title}</Title>}
      <AboutSlider
        pictures={galleryData.pictures}
        subtitle={subtitle}
        controlsTop={controlsTop}
      />
    </Wrapper>
  );
};

export default Gallery;
