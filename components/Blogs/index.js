import { BlogsCard, SectionNote } from 'components';
import * as S from './styles';

const Blogs = ({ mock, back }) => {
  const { title, text, note } = mock;
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.StyledText>{text}</S.StyledText>
      <S.List>
        {back &&
          back.map((el, i) => (
            <li key={i}>
              <BlogsCard data={el} background="#F7F8F9" />
            </li>
        ))}s
      </S.List>
      <SectionNote data={note} />
    </S.Wrapper>
  );
};

export default Blogs;
