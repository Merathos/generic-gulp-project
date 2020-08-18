import { Subtitle, SmallText, TitleH1 } from 'elements';
import * as S from './styles';

const GreyHeader = ({ data: { title, text, list, sidebar } }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <TitleH1>{title}</TitleH1>
        <S.Paragraph>{text}</S.Paragraph>
        <S.Features>
          {list.map((el, i) => (
            <S.Element key={i}>
              <S.ListTitle>{el.title}</S.ListTitle>
              <SmallText>{el.text}</SmallText>
            </S.Element>
          ))}
        </S.Features>
      </S.Wrapper>
      <S.Aside>
        <S.Logo />
        <Subtitle>{sidebar}</Subtitle>
      </S.Aside>
    </S.Grid>
  );
};

export default GreyHeader;