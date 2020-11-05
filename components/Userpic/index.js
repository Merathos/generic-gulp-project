import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';
import { Block, Img } from './styles';

const Userpic = props => {
  const {
    data: { imageUrl, title, describe },
  } = props;
  return (
    <Block>
      <Img
        src={`https://api.develop.dins.d.nimax.ru/${imageUrl}`}
        alt={title}
      />
      <div>
        <TitleH5>{title}</TitleH5>
        <Subtitle>{describe}</Subtitle>
      </div>
    </Block>
  );
};

export default Userpic;
