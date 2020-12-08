import Link from 'next/link';
import moment from 'moment';
import * as S from './styles';

const StoryCard = props => {
  const {
    data: {
      title,
      slug,
      preview: {
        path: { normal },
      },
      created_at,
    },
    background,
  } = props;

  return (
    <Link href={slug}>
      <S.Wrapper className="js-content" background={background}>
        <S.Date>{moment(created_at).format('DD.MM.yyyy')}</S.Date>
        <S.Title>{title}</S.Title>
        <S.Picture src={normal} alt={title} width="210" height="254" />
      </S.Wrapper>
    </Link>
  );
};

export default StoryCard;
