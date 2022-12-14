import { BlogHeader, ArticleContent, SocialShare } from 'components';
import { StyledContainer, ContentContainer, GreyContainer } from './styles';

const Story = ({ back }) => {
  let content = {};
  if (back.content) {
    content = JSON.parse(back.content);
  }

  return (
    <main>
      <GreyContainer>
        <StyledContainer>
          <BlogHeader
            title={back.title}
            text={back.description}
            picture={back.detail?.path?.normal}
            audio={back.audio}
            mobPicture={back.detail_mobile?.path?.normal}
          />
        </StyledContainer>
      </GreyContainer>

      <ContentContainer>
        {Object.keys(content).length !== 0 && (
          <ArticleContent content={content} />
        )}
      </ContentContainer>
      <SocialShare />
    </main>
  );
};

export default Story;
