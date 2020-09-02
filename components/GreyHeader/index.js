import { Subtitle, SmallText, TitleH1 } from 'elements';
import * as S from './styles';

const GreyHeader = ({ data: { title, text, list, sidebar, picture } }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <TitleH1>{title}</TitleH1>
        <S.Paragraph>{text}</S.Paragraph>
        {list && <S.Features>
          {list.map((el, i) => (
            <S.Element key={i}>
              {el.icon && <S.StyledIcon name={el.icon} white />}
              <div>
                <S.ListTitle>{el.title}</S.ListTitle>
                <SmallText>{el.text}</SmallText>
                {el.subtitle && <Subtitle>{el.subtitle}</Subtitle>}
              </div>
            </S.Element>
          ))}
        </S.Features>
        }
      </S.Wrapper>
      {sidebar && (
        <S.Aside>
          <S.Logo />
          <Subtitle>{sidebar.subtitle}</Subtitle>
        </S.Aside>
      )}
      {picture && <img src={picture} alt={title} />}
    </S.Grid>
  );
};

export default GreyHeader;