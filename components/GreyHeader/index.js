import { Player } from 'components';
import { Subtitle, TitleH1, Button } from 'elements';
import * as S from './styles';

const GreyHeader = ({
  title,
  text,
  list,
  sidebar,
  picture,
  buttons,
  audio,
  contacts = false,
}) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <TitleH1>{title}</TitleH1>
        <S.Paragraph>{text}</S.Paragraph>
        {list && (
          <S.Features contacts={contacts}>
            {list.map((el, i) => (
              <S.Element key={i}>
                {el.icon && <S.StyledIcon name={el.icon} white />}
                <div>
                  <a href={el.href}>
                    <S.ListTitle>{el.title}</S.ListTitle>
                  </a>
                  <S.StyledSmallText>{el.text}</S.StyledSmallText>
                  {el.subtitle && <Subtitle>{el.subtitle}</Subtitle>}
                </div>
              </S.Element>
            ))}
          </S.Features>
        )}
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
          <S.Picture src={picture} alt={title} />
        </S.Block>
      )}
    </S.Grid>
  );
};

export default GreyHeader;
