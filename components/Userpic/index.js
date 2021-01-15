import TitleH5 from 'elements/TitleH5';
import { Block, Img, Text } from './styles';

const Userpic = props => {
  const {
    data: { imageUrl, title, describe },
  } = props;

  return (
    <Block>
      <Img background={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`} />
      <div>
        <TitleH5 dangerouslySetInnerHTML={{ __html: title }} />
        <Text dangerouslySetInnerHTML={{ __html: describe }} />
      </div>
    </Block>
  );
};

export default Userpic;
