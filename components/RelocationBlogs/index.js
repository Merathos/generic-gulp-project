import { StoryCard } from 'components';
import * as S from './styles';

const RelocationBlogs = props => {
  const {
    data: { title, text, noteIcon, note },
    blogs,
  } = props;

  const emailRegExp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;

  const renewedNote = note.replace(
    emailRegExp,
    email => `<a href="mailto:${email}">${email}</a>`
  );

  return (
    <S.Section>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.List>
          {blogs.map(item => {
            if (item.type === 'history') {
              return (
                <li key={item.id}>
                  <StoryCard data={item} />
                </li>
              );
            }
            return null;
          })}
        </S.List>
        <S.NoteWrapper>
          <S.Icon>
            <img src={noteIcon} alt="Бонус" width="24" height="24" />
          </S.Icon>
          <S.NoteText dangerouslySetInnerHTML={{ __html: renewedNote }} />
        </S.NoteWrapper>
      </S.Container>
    </S.Section>
  );
};

export default RelocationBlogs;
