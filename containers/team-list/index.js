import { useRouter } from 'next/router';
import { Cards, Tags } from 'components';
import { TeamsFilter } from 'forms';
import * as S from './styles';

const TeamList = ({ mock, back, stacks }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <S.Main>
      <S.Container>
        <S.Grid>
          <S.Aside>
            <TeamsFilter data={mock.filter} stacks={stacks} />
          </S.Aside>
          <S.Article>
            <S.Title>{mock.mainTitle}</S.Title>
            {query.technologies?.length > 0 && <Tags stacks={stacks} />}
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
