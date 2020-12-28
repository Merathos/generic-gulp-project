import dayjs from 'dayjs';
import Link from 'next/link';
import * as S from './styles';

const ArticleCard = ({ data }) => {
  const { title, slug, preview, created_at, summary, category } = data;
  return (
    <Link href={`articles/${slug}`}>
      <S.Wrapper>
        {preview && (
          <S.Picture
            src={preview.path?.normal}
            srcSet={`${preview.path?.retina} 2x`}
            alt={title}
            loading="lazy"
          />
        )}
        <S.StyledSubtitle>
          {dayjs(created_at).format('DD.MM.YYYY')}
        </S.StyledSubtitle>
        <S.Title>{title}</S.Title>
        <S.Text>{summary}</S.Text>
        <S.Span>{category.name}</S.Span>
      </S.Wrapper>
    </Link>
  );
};

export default ArticleCard;
