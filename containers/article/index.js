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
import { Container, Wrapper, Grid, Aside } from './styles';

const Article = ({ data }) => {
  return (
    <Container>
      <Title data={data.mainTitle} />
      <Grid>
        <Wrapper>
          <Paragraph size="h2" data={data.introduction} />
        </Wrapper>
        <Aside>
          <SidebarSlider data={data.sidebarSlider} />
        </Aside>
      </Grid>
      <Wrapper>
        <Media type="img" data={data.imageNormal} />
        <List position="row" data={data.features} />
        <Paragraph size="h2" data={data.definitions} />
        <List position="row" type="blue" data={data.reductions} />
        <SectionNote data={data.sectionNote} />
      </Wrapper>
      <Media type="img" data={data.imageBig} />
      <Grid>
        <Wrapper>
          <MarkerList type="ellipse" data={data.list} />
          <Slider type="img" data={data.slider} />
        </Wrapper>
        <Aside>
          <SidebarArticle type="default" data={data.sidebarArticleMiddle} />
        </Aside>
      </Grid>
      <Grid>
        <Wrapper>
          <Paragraph size="h3" data={data.cmx} />
          <List data={data.noteWithPictures} />
          <Paragraph size="h2" data={data} />
          <MarkerList type="number" data={data.listNumbers} />
          <Media type="video" data={data.video} />
          <IconsList data={data.listIcons} />
          <Quote data={data.quote} />
          <Feedback data={data.feedback} />
          <Comments data={data.comments} />
        </Wrapper>
        <Aside>
          <SidebarArticle type="icon" data={data.sidebarArticleBottom} />
        </Aside>
      </Grid>
      <Articles type="article" data={data.articles} />
    </Container>
  );
};

export default Article;
