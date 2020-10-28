import { useQuery } from '@apollo/react-hooks'
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { GET_FILTER_SEARCH } from 'graphql/query';
import { Cards, SidebarArticle, Tags } from 'components';
import { Search, Filter } from 'forms';
import { getNewTags } from 'helpers';
import * as S from './styles';

const VacanciesList = ({ data: mock, back }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_FILTER_SEARCH,
    {
      variables: {
        search: value,
      },
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );
  const _refetch = useQuery(GET_FILTER_SEARCH).refetch;

  const refetch = useCallback(() => {
    setTimeout(
      () =>
        _refetch({
          variables: {
            search: value,
          },
        }),
      0
    );
  }, [_refetch]);

  const handleSearch = filterValue => {
    setValue(filterValue);
    refetch();
  };

  const handleClearTags = tag => {
    dispatch({ type: 'CLEAR_FILTER', payload: tag });
    const { pathname, query } = router;
    router.push({
      pathname,
      query: {
        ...query,
        tags: getNewTags(router.query.tags, tag),
      },
    });
  }

  return (
    <S.Container>
      <S.Grid>
        <S.Aside>
          <Filter data={mock.filter} />
          <SidebarArticle type="button" data={mock.article} />
        </S.Aside>
        <S.Article>
          <S.Title>{mock.mainTitle}</S.Title>
          <Search
            placeholder={mock.search}
            handleSearch={search => handleSearch(search)}
            initialValue={router.query.search}
          />
          <Tags handleChangeFilter={el => handleClearTags(el)} />
        </S.Article>
        <Cards data={back} type="vacancies" />
      </S.Grid>
    </S.Container>
  );
};

export default VacanciesList;
