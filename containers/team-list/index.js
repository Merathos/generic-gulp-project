import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Cards } from 'components';
import { FilterButton } from 'elements';
import { TeamsFilter } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back }) => {
  const filterArray = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <main>
      <S.Container>
        <S.Grid>
          <S.Aside>
            <TeamsFilter
              data={mock.filter}
              handleChange={e =>
                dispatch({ type: 'CATALOG_FILTER', payload: e })
              }
            />
          </S.Aside>
          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            {/* to do - make component */}
            <S.Tags>
              {filterArray.length !== 0 && 
                filterArray.map((el, i) => (
                <S.Element key={i}>
                    <FilterButton
                      name={el}
                      handleChange={() =>
                        dispatch({ type: 'CLEAR_FILTER', payload: el })}
                    />
                  </S.Element>
              ))}
            </S.Tags>
          </S.Article>
          <Cards data={back} type="teams" />
        </S.Grid>
      </S.Container>
    </main>
  );
};

export default TeamList;
