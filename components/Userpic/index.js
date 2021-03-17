import { TitleH5 } from 'elements';
import { sanitize } from 'isomorphic-dompurify';
import { Block, Img, Text } from './styles';

const Userpic = (props) => {
  const {
    data: { imageUrl, title, describe },
  } = props;

  return (
    <Block>
      <Img background={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`} />
      <div>
        <TitleH5 dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
        <Text dangerouslySetInnerHTML={{ __html: sanitize(describe) }} />
      </div>
    </Block>
  );
};

export default Userpic;
