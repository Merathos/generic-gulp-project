import { BlogsCard, ArticleCard } from 'components';
import * as S from './styles';

const GridArticles = ({ articles }) => (
  <S.Section>
    <S.List>
      {articles.map((el, i) => (
        <S.Item key={i}>
          {el.type === 'history' ? (
            <BlogsCard data={el} background="#F7F8F9" />
          ) : (
            <ArticleCard data={el} />
          )}
        </S.Item>
      ))}
    </S.List>
  </S.Section>
);

export default GridArticles;
