import { GridArticles } from 'components';
import { Tabs } from 'forms';
import * as S from './styles';

const BlogList = ({ mock, back }) => {
  return (
    <main>
      <S.Container>
        <S.Title>{mock.mainTitle}</S.Title>
        <Tabs tabs={mock.filterTabs} />
        <GridArticles articles={back || []} />
      </S.Container>
    </main>
  );
};

export default BlogList;
