import { Cards, SidebarArticle } from 'components';
import { Search, Filter } from 'forms';
import * as S from './styles';

const VacanciesList = ({ data, back }) => {
  return (
    <S.Container>
      <S.Grid>
        <S.Aside>
          <Filter data={data.filter} />
          <SidebarArticle type="button" data={data.article} />
        </S.Aside>
        <S.Article>
          <S.Title>{data.mainTitle}</S.Title>
          <Search data={data.search} />
        </S.Article>
        <Cards data={back} type="vacancies" />
      </S.Grid>
    </S.Container>
  );
};

export default VacanciesList;
