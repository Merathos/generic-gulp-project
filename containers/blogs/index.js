import { BlogGrid } from 'components';
import { BlogsFilter } from 'forms';
import * as S from './styles';

const Blogs = ({ data }) => {
  return (
    <main>
      <S.Section>
        <S.Container>
          <S.Title>{data.mainTitle}</S.Title>
          <BlogsFilter filterTabs={data.filterTabs} />
          <BlogGrid cards={data.cards} />
        </S.Container>
      </S.Section>
    </main>
  );
};

export default Blogs;
