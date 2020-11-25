import Link from 'next/link';
import * as S from './styles';

const StoryCard = props => {
  const {
    data: { date, title, img, href },
  } = props;

  return (
    <Link href={href}>
      <S.Wrapper className="js-content">
        <S.Date>{date}</S.Date>
        <S.Title>{title}</S.Title>
        <S.Picture src={img} alt={title} width="210" height="254" />
      </S.Wrapper>
    </Link>
  );
};

export default StoryCard;
