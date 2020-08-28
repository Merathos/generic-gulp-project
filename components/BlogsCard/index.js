import * as S from './styles';

const Blogs = ({ data }) => {
  const {
    title,
    slug,
    preview: { path: { original } },
    created_at
  } = data;
  console.log(original);
  return (
    <S.Wrapper>
      <S.StyledSubtitle>{created_at}</S.StyledSubtitle>
      <S.Title>{title}</S.Title>
      <img src={original} alt={title} />
    </S.Wrapper>
  );
};

export default Blogs;
