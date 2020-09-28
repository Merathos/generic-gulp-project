import { Player } from 'components';
import { Subtitle, SmallText, TitleH1, Button } from 'elements';
import * as S from './styles';

const GreyHeader = ({
  title,
  text,
  list,
  sidebar,
  picture,
  buttons,
  audio,
  mobPicture
}) => {
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
        {buttons && (
          <S.ButtonsWrapper>
            <S.StyledButton type="accent">{buttons[0]}</S.StyledButton>
            <Button>{buttons[1]}</Button>
          </S.ButtonsWrapper>
        )}
        {audio && <Player src={audio} />}
      </S.Wrapper>
      {sidebar && (
        <S.Aside>
          <S.Logo />
          <Subtitle>{sidebar.subtitle}</Subtitle>
        </S.Aside>
      )}
      {picture && (
        <S.Block>
          <S.Picture src={picture} srcSet={`${mobPicture} 420w, ${picture}`} alt={title} />
        </S.Block>
      )}
    </S.Grid>
  );
};

export default GreyHeader;