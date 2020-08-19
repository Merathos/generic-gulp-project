import { Subtitle, SmallText, TitleH1, Icon } from 'elements';
import * as S from './styles';

const GreyHeader = ({ data: { title, text, list, sidebar, subtitle } }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <TitleH1>{title}</TitleH1>
        <S.Paragraph>{text}</S.Paragraph>
        <S.Features>
          {list.map((el, i) => (
            <S.Element key={i}>
              {el.icon && <Icon name={el.icon} />}
              <S.ListTitle>{el.title}</S.ListTitle>
              <SmallText>{el.text}</SmallText>
              {el.subtitle && <Subtitle>{el.subtitle}</Subtitle>}
            </S.Element>
          ))}
        </S.Features>
      </S.Wrapper>
      {sidebar && (
        <S.Aside>
          <S.Logo />
          <Subtitle>{sidebar}</Subtitle>
        </S.Aside>
      )}
    </S.Grid>
  );
};

export default GreyHeader;