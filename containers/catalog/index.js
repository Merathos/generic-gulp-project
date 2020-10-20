import { useLazyQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GET_FILTER_SEARCH } from 'graphql/query';
import { Cards, SidebarArticle } from 'components';
import { Search, Filter } from 'forms';
import * as S from './styles';

const VacanciesList = ({ data, back }) => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [cards, setCards] = useState(back);
  const [makeSearchRequest, { data: dataSearch }] = useLazyQuery(
    GET_FILTER_SEARCH,
    {
      variables: {
        value
      }
    }
  );

  if (dataSearch && dataSearch.vacancies) {
    setCards(dataSearch.vacancies);
  }

  const handleSearch = searchValue => {
    setValue(searchValue);
    router.push({
      query: {
        search: searchValue
      }
    });
    makeSearchRequest();
  };

  return (
    <S.Container>
      <S.Grid>
        <S.Aside>
          <Filter data={data.filter} />
          <SidebarArticle type="button" data={data.article} />
        </S.Aside>
        <S.Article>
          <S.Title>{data.mainTitle}</S.Title>
          <Search
            data={data.search}
            handleSearch={searchValue => handleSearch(searchValue)}
          />
        </S.Article>
        <Cards data={cards.length === 0 ? [] : cards} type="vacancies" />
      </S.Grid>
    </S.Container>
  );
};

export default VacanciesList;
