import { BlogsCard } from 'components';
import * as S from './styles';

const GridArticles = ({ articles }) => (
  <S.Section>
    <S.List>
      {articles.map((el, i) => (
        <BlogsCard data={el} />
      ))}
    </S.List>
  </S.Section>
);

export default GridArticles;
