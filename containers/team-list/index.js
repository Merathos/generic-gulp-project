import { Cards } from 'components';
import { Filter } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back }) => {
  return (
    <main>
      <S.Container>
        <S.Grid>
          <S.Aside>
            {/* <Filter data={mock.filter} /> */}
          </S.Aside>
          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            <Cards data={back} />
          </S.Article>
          <Cards data={back} type="teams" />
        </S.Grid>
      </S.Container>
    </main>
  );
};

export default TeamList;
