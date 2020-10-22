import { useQuery } from '@apollo/react-hooks'
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { GET_FILTER_SEARCH } from 'graphql/query';
import { Cards, SidebarArticle, Tags } from 'components';
import { Search, Filter } from 'forms';
import * as S from './styles';

const VacanciesList = ({ data: mock, back }) => {
  const [value, setValue] = useState('');
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
    setTimeout(() => _refetch({
      variables: {
        search: value,
      }
    }), 0);
  }, [_refetch]);

  const handleSearch = searchValue => {
    setValue(searchValue);
    refetch();
  };

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
          />
          <Tags />
        </S.Article>
        <Cards data={back} type="vacancies" />
      </S.Grid>
    </S.Container>
  );
};

export default VacanciesList;
