import Link from 'next/link';
import * as S from './styles';

const StoryCard = props => {
  const {
    data: { date, title, img },
  } = props;

  return (
    <Link href={`blog/articles`}>
      <S.Wrapper>
        <S.Date>{date}</S.Date>
        <S.Title>{title}</S.Title>
        <S.Picture src={img} alt={title} width="210" height="254" />
      </S.Wrapper>
    </Link>
  );
};

export default StoryCard;
