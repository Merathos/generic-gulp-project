import { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GridArticles } from 'components';
import { GET_BLOG_CATEGORIES } from 'graphql/query';
import { Tabs } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back }) => {
  return (
    <main>
      <S.Container>
        <S.Title>{mock.mainTitle}</S.Title>
        {/* <Tabs tabs={mock.filterTabs} /> */}
        {/* <GridArticles articles={back} /> */}
      </S.Container>
    </main>
  );
};

export default TeamList;
