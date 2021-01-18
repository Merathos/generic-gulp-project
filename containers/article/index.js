import { Title, Articles, ArticleContent } from 'components';
import { Container, Wrapper, Grid, Aside } from './styles';

const Article = ({ data, back }) => {
  let content = {};
  if (back.content) {
    content = JSON.parse(back.content);
  }

  return (
    <Container>
      <Title
        title={back?.title}
        date={back?.created_at}
        description={back?.description}
      />
      {Object.keys(content).length !== 0 && (
        <ArticleContent content={content} />
      )}
      {data.articles?.length > 0 && (
        <Articles type="article" data={data.articles} />
      )}
    </Container>
  );
};

export default Article;
