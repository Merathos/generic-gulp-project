import moment from 'moment';
import Link from 'next/link';
import * as S from './styles';

const BlogsCard = ({ data, background }) => {
  const {
    title,
    slug,
    preview: {
      path: { normal },
    },
    created_at,
  } = data;

  return (
    <Link href={`articles/${slug}`}>
      <S.Wrapper background={background}>
        <S.StyledSubtitle>
          {moment(created_at).format('DD.MM.yyyy')}
        </S.StyledSubtitle>
        <S.Title>{title}</S.Title>
        <S.Picture src={normal} alt={title} />
      </S.Wrapper>
    </Link>
  );
};

export default BlogsCard;
