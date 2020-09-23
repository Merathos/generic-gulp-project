import { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GridArticles } from 'components';
import { GET_BLOG_CATEGORIES } from 'graphql/query';
import { Tabs } from 'forms';
import * as S from './styles';

const BlogList = ({ mock, back }) => {
  const [blogArray, setBlogs] = useState(back);
  const [getCategories, { loading, data }] = useLazyQuery(GET_BLOG_CATEGORIES);

  if (data) {
    setBlogs(data);
  }

  return (
    <main>
      <S.Container>
        <S.Title>{mock.mainTitle}</S.Title>
        <Tabs
          tabs={mock.filterTabs}
          handleClick={e =>
            getCategories({ variables: { categories: 'tradicii' } })
          }
        />
        <GridArticles articles={blogArray}/>
      </S.Container>
    </main>
  );
};

export default BlogList;
