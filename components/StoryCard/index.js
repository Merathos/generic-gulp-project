import Link from 'next/link';
import dayjs from 'dayjs';
import * as S from './styles';

const StoryCard = props => {
  const {
    data: { title, slug, preview, created_at },
    background,
    isAfterHighlight,
  } = props;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <S.Wrapper
        className="js-content"
        background={background}
        isAfterHighlight={isAfterHighlight}
      >
        {created_at && (
          <S.Date>{dayjs(created_at).format('DD.MM.YYYY')}</S.Date>
        )}
        <S.Title>{title}</S.Title>
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
      </S.Wrapper>
    </Link>
  );
};

export default StoryCard;
