import { AboutSlider } from 'components';
import { Title, Wrapper } from './styles';

const Gallery = ({ data: { title, subtitle, pictures } }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <AboutSlider pictures={pictures} subtitle={subtitle} />
    </Wrapper>
  );
};

export default Gallery;
