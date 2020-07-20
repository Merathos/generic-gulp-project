import { Title } from './styles';
import { Slider } from 'components';

const Gallery = ({ data, data: { title } }) => {
  return (
    <>
      <Title content={title} />
      <Slider data={data} />
    </>
  );
};

export default Gallery;
