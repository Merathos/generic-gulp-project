import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Cards, Tags } from 'components';
import { TeamsFilter } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filterArray = useSelector(state => state.filter);
  const { pathname, query } = router;

  const handleClick = e => {
    if (filterArray.indexOf(e) === -1) {
      router.push(
        {
          pathname,
          query: {
            ...query,
            filter: [...filterArray, e],
          },
        },
        undefined,
        { shallow: true }
      );
      dispatch({ type: 'CATALOG_FILTER', payload: e });
    } else {
      const item = filterArray.find(el => el === e);
      const index = filterArray.indexOf(item);

      router.push(
        {
          pathname,
          query: {
            ...query,
            filter: [
              ...filterArray.slice(0, index),
              ...filterArray.slice(index + 1),
            ],
          },
        },
        undefined,
        { shallow: true }
      );
      dispatch({ type: 'CLEAR_FILTER', payload: e });
    }
  };

  const handleClearTags = tag => {
    dispatch({ type: 'CLEAR_FILTER', payload: tag });

    const item = filterArray.find(el => el === tag);
    const index = filterArray.indexOf(item);

    router.push(
      {
        pathname,
        query: {
          ...query,
          filter: [
            ...filterArray.slice(0, index),
            ...filterArray.slice(index + 1),
          ],
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <S.Main>
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
            {filterArray.length > 0 && (
              <Tags handleChangeFilter={el => handleClearTags(el)} />
            )}
          </S.Article>
          <S.CardsWrapper>
            {back && <Cards data={back} type="teams" />}
          </S.CardsWrapper>
        </S.Grid>
      </S.Container>
    </S.Main>
  );
};

export default TeamList;
