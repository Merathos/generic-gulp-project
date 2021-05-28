import { BlogGrid } from 'components';
import { BlogsFilter } from 'forms';
import * as S from './styles';

const Blogs = ({ data, categories, blogs }) => {
  return (
    <main>
      <S.Section>
        <S.StyledContainer>
          <S.Title>{data.mainTitle}</S.Title>
          {categories && <BlogsFilter categories={categories} />}
          {blogs && <BlogGrid cards={blogs} />}
        </S.StyledContainer>
      </S.Section>
    </main>
  );
};

export default Blogs;
