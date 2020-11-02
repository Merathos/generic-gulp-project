import styled from 'styled-components';
import { 
  Paragraph,
  SidebarSlider,
  Media,
  MarkerList,
  List,
  SectionNote,
  Slider,
  Feedback,
  Quote,
  Userpic,
  Comments,
  Video,
  SidebarArticle,
} from 'components';
import { TitleH2, TitleH3 } from 'elements';

const H2 = styled(TitleH2)`
  padding-top: 60px;
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    padding-top: 30px;
    margin-bottom: 30px;
  }
`;

const H3 = styled(TitleH3)`
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

const StyledSlider = styled(Slider)`
  max-width: 850px;
`;

const renderContent = props => {
  const { type, data } = props;
  return (
    <>
      {
        {
          header:
            data.level === 2 ? <H2>{data.text}</H2> : <H3>{data.text}</H3>,
          paragraph: <Paragraph bold="700" data={data} />,
          list:
            data.style === 'ordered' ? (
              <MarkerList data={data.items} />
            ) : (
              <MarkerList type="ellipse" data={data.items} />
            ),
          image: <Media type="img" data={data} />,
          factoidsWithImages: <List data={data.factoids} />,
          factoids: <List type="blue" data={data.factoids} />,
          note: <SectionNote data={data.text} />,
          person: <Feedback data={data} />,
          gallery: <StyledSlider pictures={data.factoids} fromEditor />,
          asideSlider: <SidebarSlider data={data.factoids} />,
          video: <Video data={data} />,
          quote: <Quote data={data} />,
          comments: <Comments data={data.factoids} />,
          asideBlock: <SidebarArticle type="default" data={data} fromEditor />,
          asideNote: <SidebarArticle type="icon" data={data} fromEditor />,
          user: <Userpic data={data} />,
        }[type]
      }
    </>
  )
};

const ArticleContent = ({ content }) => (
  <>
    {content.length !== 0 && 
      content.map((el, index) => <div key={index}>{renderContent(el)}</div>)}
  </>
);

export default ArticleContent;
