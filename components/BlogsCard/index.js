import moment from 'moment';
import Link from 'next/link';
import * as S from './styles';

const Blogs = ({ data, background }) => {
  const {
    title,
    slug,
    preview: {
      path: { original }
    },
    created_at
  } = data;
  return (
    <Link href={`blogs/${slug}`}>
      <S.Wrapper background={background}>
        <S.StyledSubtitle>
          {moment(created_at).format('DD.MM.yyyy')}
        </S.StyledSubtitle>
        <S.Title>{title}</S.Title>
        <S.Picture src={original} alt={title} />
      </S.Wrapper>
    </Link>
  );
};

export default Blogs;
