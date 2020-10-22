import { useDispatch } from 'react-redux';
import { Cards, Tags } from 'components';
import { TeamsFilter } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back }) => {
  const dispatch = useDispatch();

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
            <Tags />
          </S.Article>
          <Cards data={back} type="teams" />
        </S.Grid>
      </S.Container>
    </main>
  );
};

export default TeamList;
