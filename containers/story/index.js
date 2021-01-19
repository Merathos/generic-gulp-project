import { GreyFooter, BlogHeader, ArticleContent } from 'components';
import { Container, GreyContainer } from './styles';

const Story = ({ back }) => {
  let content = {};
  if (back.content) {
    content = JSON.parse(back.content);
  }
  const relatedHistory = back.related?.filter(i => i.type === 'history');

  return (
    <main>
      <GreyContainer>
        <Container>
          <BlogHeader
            title={back.title_new_line}
            text={back.description}
            picture={back.detail?.path?.normal}
            audio={back.audio}
            mobPicture={back.detail_mobile?.path?.normal}
          />
        </Container>
      </GreyContainer>

      <Container>
        {Object.keys(content).length !== 0 && (
          <ArticleContent content={content} />
        )}
      </Container>

      {relatedHistory.length > 0 && (
        <GreyContainer>
          <GreyFooter data={relatedHistory} type="blog" />
        </GreyContainer>
      )}
    </main>
  );
};

export default Story;
