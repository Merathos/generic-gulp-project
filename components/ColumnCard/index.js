import Link from 'next/link';
import dayjs from 'dayjs';
import * as S from './styles';

const ColumnCard = (props) => {
  const {
    data: { title, summary, preview, created_at, category, slug },
  } = props;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <S.Wrapper className="js-content">
        {preview && (
          <S.Picture
            src={preview?.path?.normal}
            srcSet={`${preview?.path?.retina} 2x`}
            alt={title}
            width="210"
            height="254"
            loading="lazy"
          />
        )}
        {created_at && (
          <S.Date>{dayjs(created_at).format('DD.MM.YYYY')}</S.Date>
        )}
        <S.Title>{title}</S.Title>
        <S.Text>{summary}</S.Text>
        <S.Type>{category?.name}</S.Type>
      </S.Wrapper>
    </Link>
  );
};

export default ColumnCard;
