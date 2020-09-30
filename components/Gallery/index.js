import { Slider } from 'components';
import { Title } from './styles';

const Gallery = ({ data: { title, subtitle, pictures } }) => {
  return (
    <>
      <Title>{title}</Title>
      <Slider pictures={pictures} subtitle={subtitle} />
    </>
  );
};

export default Gallery;
