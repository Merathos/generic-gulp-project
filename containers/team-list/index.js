import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Cards, Tags } from 'components';
import { TeamsFilter } from 'forms';
import { getNewTags } from 'helpers';
import * as S from './styles';

const TeamList = ({ mock, back }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filter);

  const handleClick = filterValue => {
    if (filterArray.indexOf(filterValue) === -1) {
      dispatch({ type: 'CATALOG_FILTER', payload: filterValue });
    } else {
      dispatch({ type: 'CLEAR_FILTER', payload: filterValue });
    }
    const { pathname, query } = router;
    router.push({
      pathname,
      query: {
        ...query,
        tags: getNewTags(router.query.tags, filterValue),
      },
    });
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
    <main>
      <S.Container>
        <S.Grid>
          <S.Aside>
            <TeamsFilter
              data={mock.filter}
              handleChange={e => handleClick(e)}
            />
          </S.Aside>
          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            <Tags handleChangeFilter={el => handleClearTags(el)} />
          </S.Article>
          <Cards data={back} type="teams" />
        </S.Grid>
      </S.Container>
    </main>
  );
};

export default TeamList;
