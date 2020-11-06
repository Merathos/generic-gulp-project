import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';
import { Block, Img } from './styles';

const Userpic = props => {
  const {
    data: { imageUrl, title, describe },
  } = props;
  return (
    <Block>
      <Img background={`https://api.develop.dins.d.nimax.ru/${imageUrl}`} />
      <div>
        <TitleH5>{title}</TitleH5>
        <Subtitle dangerouslySetInnerHTML={{ __html: describe }} />
      </div>
    </Block>
  );
};

export default Userpic;
