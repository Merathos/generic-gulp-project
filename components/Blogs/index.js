import { BlogsCard, SectionNote } from 'components';
import * as S from './styles';

const Blogs = ({ mock, back }) => {
  const { title, text, note } = mock;
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.StyledText>{text}</S.StyledText>
      <ul>
        {back &&
          back.map((el, i) => (
            <li key={i}>
              <BlogsCard data={el} />
            </li>
        ))}
      </ul>
      <SectionNote data={note} />
    </>
  );
};

export default Blogs;
