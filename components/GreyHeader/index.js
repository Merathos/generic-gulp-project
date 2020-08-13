import MagicQuadrant from 'public/images/about-magic-quadrant.svg';
import { Subtitle } from 'elements';
import * as S from './styles';

const GreyHeader = ({ data: { title, text, list, sidebar } }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Paragraph>{text}</S.Paragraph>
        <S.Features>
          {list.map((el, i) => (
            <S.Element key={i}>
              <S.ListTitle>{el.title}</S.ListTitle>
              <S.ListText>{el.text}</S.ListText>
            </S.Element>
          ))}
        </S.Features>
      </S.Wrapper>
      <S.Aside>
        <MagicQuadrant />
        <Subtitle>{sidebar}</Subtitle>
      </S.Aside>
    </S.Grid>
  );
};

export default GreyHeader;