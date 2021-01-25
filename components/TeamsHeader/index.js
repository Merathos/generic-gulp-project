import { TitleH1 } from 'elements';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const TeamsHeader = ({ title, text, stack, picture }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        {title && (
          <TitleH1
            dangerouslySetInnerHTML={{
              __html: sanitize(title),
            }}
          />
        )}
        {text && <S.Paragraph>{text}</S.Paragraph>}
        {stack && (
          <S.TextBlock>
            <S.Bold>Technology Stack:</S.Bold>
            <S.StyledText>{stack}</S.StyledText>
          </S.TextBlock>
        )}
      </S.Wrapper>
      {picture && (
        <S.Picture
          src={picture.path.normal}
          srcSet={`${picture.path.retina} 2x`}
          alt={title}
          loading="lazy"
        />
      )}
    </S.Grid>
  );
};

export default TeamsHeader;
