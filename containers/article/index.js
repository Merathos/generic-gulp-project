import {
  Title,
  Articles,
  ArticleContent
} from 'components';
import { Container, Wrapper, Grid, Aside } from './styles';

const Article = ({ data, back }) => {
  let content = {};
  if (back.content) {
    content = JSON.parse(back.content);
  }
  return (
    <Container>
      <Title data={data.mainTitle} />
      {Object.keys(content).length !== 0 && (
        <ArticleContent content={content} />
      )}
      <Articles type="article" data={data.articles} />
    </Container>
  );
};

export default Article;
