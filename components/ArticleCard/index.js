import moment from 'moment';
import Link from 'next/link';
import * as S from './styles';

const ArticleCard = ({ data }) => {
  const {
    title,
    slug,
    preview: {
      path: { normal }
    },
    created_at,
    summary,
    category
  } = data;
  return (
    <Link href={`articles/${slug}`}>
      <S.Wrapper>
        {normal && <S.Picture src={normal} alt={title} />}
        <S.StyledSubtitle>
          {moment(created_at).format('DD.MM.yyyy')}
        </S.StyledSubtitle>
        <S.Title>{title}</S.Title>
        <S.Text>{summary}</S.Text>
        <S.Span>{category.name}</S.Span>
      </S.Wrapper>
    </Link>
  );
};

export default ArticleCard;
