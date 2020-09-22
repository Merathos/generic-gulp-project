import { GridArticles } from 'components';
import { Tabs } from 'forms';
import * as S from './styles';

const BlogList = ({ data, back }) => {
  return (
    <main>
      <S.Container>
        <S.Title>{data.mainTitle}</S.Title>
        <Tabs tabs={data.filterTabs} handleClick={e => console.log(e)} />
        <GridArticles articles={back} />
      </S.Container>
    </main>
  );
};

export default BlogList;