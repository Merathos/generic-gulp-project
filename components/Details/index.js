import * as S from './styles';
import { Button } from 'elements';
// import Link from 'next/link';

const Details = ({ data: { block1, block2 } }) => {
  return (
    <S.Section>
      <div>
        <S.H3>{block1.title}</S.H3>
        <S.Text>{block1.text}</S.Text>
        <S.List>
          {block1.list.map((el, i) => (
            <S.Element>
              <S.StyledIcon name={el.icon} />
              <span>{el.title}</span>
            </S.Element>
          ))}
        </S.List>
        <S.StyledSubtitle>{block1.subtitle}</S.StyledSubtitle>
        <Button type="accent">{block1.button}</Button>
      </div>
      <div>
        <S.H3>{block2.title}</S.H3>
        <S.Text>{block2.text}</S.Text>
        <S.Links>
          {block2.links.map((el, i) => (
            <S.LinkElement>
              <S.Link href={el.link}>
                {el.title}
              </S.Link>
            </S.LinkElement>
          ))}
        </S.Links>
        <img src={block2.picture} alt={block2.title} />
      </div>
    </S.Section>
  );
};

export default Details;