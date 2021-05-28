import { Subtitle } from 'elements';
import * as S from './styles';

const IconsList = ({ data }) => {
  return (
    <S.List>
      {data.map((item) => (
        <li key={item.id}>
          <S.EmojiContainer>
            <S.Emoji
              src={item.image?.path?.normal}
              srcSet={`${item.image?.path?.retina} 2x`}
              alt={item.text}
              loading="lazy"
            />
          </S.EmojiContainer>
          <Subtitle>{item.text}</Subtitle>
        </li>
      ))}
    </S.List>
  );
};

export default IconsList;
