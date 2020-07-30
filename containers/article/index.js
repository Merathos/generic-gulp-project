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
import { SectionGroup, Section } from 'containers';
import { Container, Wrapper, Grid, Aside } from './styles';

const Article = ({ data }) => {
  return (
    <Container>
      <Title data={data.mainTitle} />
      <Grid>
        <Wrapper>
          <SectionGroup>
            <Paragraph size="h2" data={data.introduction} margin="100px" />
            <Media type="img" data={data.imageNormal} decoration />
            <List position="row" data={data.features} />
          </SectionGroup>
          <SectionGroup>
            <Paragraph size="h2" data={data.definitions} margin="100px" />
            <List position="row" type="blue" data={data.reductions} />
          </SectionGroup>
          <SectionNote data={data.sectionNote} />
        </Wrapper>
        <Aside>
          <SidebarSlider data={data.sidebarSlider} />
        </Aside>
      </Grid>

      <Media type="img" data={data.imageBig} />

      <Grid>
        <Wrapper>
          <Section>
            <MarkerList type="ellipse" data={data.list} />
          </Section>
          <Slider type="img" data={data.slider} />
          <Paragraph size="h3" data={data.cmx} margin="100px" />
          <List data={data.noteWithPictures} />
          <Paragraph size="h2" data={data} margin="100px" />
          <Section>
            <MarkerList type="number" data={data.listNumbers} />
          </Section>
          <Media type="video" data={data.video} />
          <IconsList data={data.listIcons} />
          <Quote data={data.quote} />
          <Feedback data={data.feedback} />
          <Comments data={data.comments} />
        </Wrapper>
        <Aside>
          <SidebarArticle type="default" data={data.sidebarArticleMiddle} />
          <SidebarArticle type="icon" data={data.sidebarArticleBottom} />
        </Aside>
      </Grid>

      <Articles type="article" data={data.articles} />
    </Container>
  );
};

export default Article;
