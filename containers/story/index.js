import { GreyFooter, BlogHeader, ArticleContent } from 'components';
import { Container, GreyContainer } from './styles';

const Story = ({ back }) => {
  let content = {};
  if (back.content) {
    content = JSON.parse(back.content);
  }
  return (
    <main>
      <GreyContainer>
        <Container>
          <BlogHeader
            title={back.title}
            text={back.description}
            picture={back.detail.path.normal}
            audio={back.audio}
            mobPicture={back.detail_mobile && back.detail_mobile.path.normal}
          />
        </Container>
      </GreyContainer>

      <Container>
        {console.log(content)}
        {Object.keys(content).length !== 0 && (
          <ArticleContent content={content} />
        )}
      </Container>

      <GreyContainer>
        <GreyFooter data={back.related} type="blog" />
      </GreyContainer>
    </main>
  );
};

export default Story;
