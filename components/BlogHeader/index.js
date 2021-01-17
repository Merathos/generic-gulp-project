import { Player } from 'components';
import { TitleH1 } from 'elements';
import * as S from './styles';

const BlogHeader = ({ title, text, picture, audio, mobPicture }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        {title && (
          <TitleH1
            dangerouslySetInnerHTML={{
              __html: title.replace(/\n/g, '<br>'),
            }}
          />
        )}
        {text && <S.Paragraph audio={audio}>{text}</S.Paragraph>}
        {audio && <Player src={audio} withDynamic />}
      </S.Wrapper>
      {picture && (
        <S.Block>
          <S.Picture
            src={picture}
            srcSet={mobPicture ? `${mobPicture} 420w, ${picture}` : ''}
            alt={title}
          />
        </S.Block>
      )}
    </S.Grid>
  );
};

export default BlogHeader;
