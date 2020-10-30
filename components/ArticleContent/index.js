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

import * as S from './styles';

const renderContent = props => {
  const { type, data } = props;
  return (
    <>
      {
        {
          header:
            data.level === 2 ? (
              <S.H2>{data.text}</S.H2>
            ) : (
              <S.H3>{data.text}</S.H3>
          ),
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
          gallery: <Slider pictures={data.factoids} fromEditor />,
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
    {content.length !== 0 && (
      <ul>
        {content.map((el, index) => (
          <li key={index}>{renderContent(el)}</li>
        ))}
      </ul>
    )}
  </>
);

export default ArticleContent;
