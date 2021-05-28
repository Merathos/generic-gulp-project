import { GridArticles } from 'components';
import { Tabs } from 'forms';
import * as S from './styles';

const BlogList = ({ mock, back }) => {
  return (
    <main>
      <S.StyledContainer>
        <S.Title>{mock.mainTitle}</S.Title>
        <Tabs tabs={mock.filterTabs} />
        <GridArticles articles={back || []} />
      </S.StyledContainer>
    </main>
  );
};

export default BlogList;
