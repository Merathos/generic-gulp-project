import { Title, Articles, ArticleContent, SocialShare } from 'components';
import * as S from './styles';

const Article = ({ back }) => {
  let content = {};
  if (back.content) {
    content = JSON.parse(back.content);
  }

  return (
    <main>
      <S.StyledContainer>
        <Title
          title={back?.title}
          date={back?.created_at}
          description={back?.description}
        />
        {Object.keys(content).length !== 0 && (
          <ArticleContent content={content} />
        )}
        <SocialShare />
        {back.related?.length > 0 && (
          <Articles type="article" data={back.related} />
        )}
      </S.StyledContainer>
    </main>
  );
};

export default Article;
