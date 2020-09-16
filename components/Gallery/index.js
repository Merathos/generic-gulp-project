import { Slider } from 'components';
import { Title } from './styles';

const Gallery = ({ data: { title, subtitle, pictures } }) => {
  return (
    <>
      <Title content={title} />
      <Slider pictures={pictures} subtitle={subtitle} />
    </>
  );
};

export default Gallery;
