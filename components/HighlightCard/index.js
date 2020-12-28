import Link from 'next/link';
import * as S from './styles';

const HighlightCard = props => {
  const {
    data: { title, summary, highlight_image: highlightImage, slug },
    bgImg,
    bgMob,
  } = props;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <S.Wrapper
        className="js-content"
        bgImg={highlightImage ? '' : bgImg}
        bgMob={highlightImage ? '' : bgMob}
      >
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Text>{summary}</S.Text>
        </S.Content>
        {highlightImage && (
          <S.Picture
            src={highlightImage?.path?.normal}
            srcSet={`${highlightImage?.path?.retina} 2x`}
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

export default HighlightCard;
