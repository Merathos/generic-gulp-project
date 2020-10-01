import { Cards } from 'components';
import { TeamsFilter } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back }) => {

  return (
    <main>
      <S.Container>
        <S.Grid>
          <S.Aside>
            <TeamsFilter data={mock.filter} />
          </S.Aside>
          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            {/* to do - make component */}
            <S.Tags> 
              {/* {filterArray.length !== 0 && (
                filterArray.map((el, i) => (
                <Element key={i}>
                    <FilterButton
                      name={el}
                      handleChange={() =>
                        dispatch({ type: 'CLEAR_FILTER', payload: el })
                      }
                    />
                </Element>
              )))} */}
            </S.Tags>
          </S.Article>
          <Cards data={back} type="teams" />
        </S.Grid>
      </S.Container>
    </main>
  );
};

export default TeamList;
