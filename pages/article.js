import { Layout } from 'containers';
import styled from 'styled-components';
import {
  Title,
  Paragraph,
  Media,
  List,
  SidebarArticle,
  SectionNote,
  Quote,
  Feedback,
  Comments,
  Articles,
  Slider,
  SidebarSlider,
  IconsList,
  MarkerList
} from 'components';

import mock from 'mock/index';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

const Article = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

const Grid = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  max-width: 254px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

const articlePage = () => {
  return (
  <Layout backButton>
    <Container>
      <Title data={mock.article.mainTitle} />
      <Grid>
        <Article>
          <Paragraph size="h2" data={mock.article.introduction} />
        </Article>
        <Aside>
          <SidebarSlider data={mock.article.sidebarSlider} />
        </Aside>
      </Grid>
      <Article>
        <Media type="img" data={mock.article.imageNormal} />
        <List position="row" data={mock.article.features} />
        <Paragraph size="h2" data={mock.article.definitions} />
        <List position="row" type="blue" data={mock.article.reductions} />
        <SectionNote data={mock.article.sectionNote} />
      </Article>
      <Media type="img" data={mock.article.imageBig} />
      <Grid>
        <Article>
          <MarkerList type="ellipse" data={mock.article.list} />
          <Slider type="img" data={mock.article.slider} />
        </Article>
        <Aside>
          <SidebarArticle
            type="default"
            data={mock.article.sidebarArticleMiddle}
          />
        </Aside>
      </Grid>
      <Grid>
        <Article>
          <Paragraph size="h3" data={mock.article.cmx} />
          <List data={mock.article.noteWithPictures} />
          <Paragraph size="h2" data={mock.article} />
          <MarkerList type="number" data={mock.article.listNumbers} />
          <Media type="video" data={mock.article.video} />
          <IconsList data={mock.article.listIcons} />
          <Quote data={mock.article.quote} />
          <Feedback data={mock.article.feedback} />
          <Comments data={mock.article.comments} />
        </Article>
        <Aside>
          <SidebarArticle
            type="icon"
            data={mock.article.sidebarArticleBottom}
          />
        </Aside>
      </Grid>
      <Articles type="article" data={mock.article.articles} />
    </Container>
  </Layout>
);
}

export default articlePage;
