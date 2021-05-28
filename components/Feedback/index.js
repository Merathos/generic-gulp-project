import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const Feedback = (props) => {
  const {
    data: { imageUrl, title, describe, subtitle },
  } = props;
  return (
    <S.Section>
      <picture>
        <source
          srcSet={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`}
          type="image/png"
          media="(min-width: 420px)"
        />
        <S.Img
          src={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`}
          alt={title}
        />
      </picture>
      <S.Content>
        <S.StyledSubtitle
          dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }}
        />
        <S.H3 dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
        <S.Text dangerouslySetInnerHTML={{ __html: sanitize(describe) }} />
      </S.Content>
    </S.Section>
  );
};

export default Feedback;
