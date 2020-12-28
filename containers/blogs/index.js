import { BlogGrid } from 'components';
import { BlogsFilter } from 'forms';
import * as S from './styles';

const Blogs = ({ data, categories, blogs }) => {
  return (
    <main>
      <S.Section>
        <S.Container>
          <S.Title>{data.mainTitle}</S.Title>
          {categories && <BlogsFilter categories={categories} />}
          {blogs && <BlogGrid cards={blogs} />}
        </S.Container>
      </S.Section>
    </main>
  );
};

export default Blogs;
