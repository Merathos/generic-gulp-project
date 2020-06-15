import { initializeStore } from 'lib/redux';
import { initializeApollo } from 'lib/apollo';
import { Layout } from 'containers';
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
  Articles
} from 'components';

import mock from 'mock/index';

function articlePage() {
  return (
    <Layout>
      <Title data={mock.article.mainTitle} />
      <Paragraph data={mock.article.introduction} />
      <Media type="img" data={mock.article.imageNormal} />
      <SidebarArticle type="picture" data={mock.article.sidebarArticleUp} />
      <List position="row" data={mock.article.features} />
      <Paragraph data={mock.article.definitions} />
      <List position="row" data={mock.article.reductions} />
      <SectionNote data={mock.article.sectionNote} />
      <Media type="img" size="big" data={mock.article.imageBig} />
      <List position="column" marker="circle" data={mock.article.list} />
      <SidebarArticle
        type="default"
        data={mock.article.sidebarArticleMiddle}
      />
      <Media type="img" data={mock.article.interface} />
      <Paragraph size="h3" data={mock.article.cmx} />
      <SidebarArticle
        type="icon"
        data={mock.article.sidebarArticleBottom}
      />
      <SectionNote data={mock.article.noteWithPictures} />
      <Paragraph size="h2" data={mock.article.text} />
      <List position="column" marker="number" data={mock.article.listNumbers} />
      <Media type="video" data={mock.article.video} />
      <List position="row" data={mock.article.listIcons} />
      <Quote data={mock.article.listIcons} />
      <Feedback data={mock.article.feedback} />
      <Comments data={mock.article.comments} />
      <Articles data={mock.article.articles} />
    </Layout>
  );
};

export async function getStaticProps() {
  const reduxStore = initializeStore()
  const apolloClient = initializeApollo()

  return {
    props: {
      initialReduxState: reduxStore.getState(),
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1
  }
};


export default articlePage;
