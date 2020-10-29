import { 
  Paragraph,
  SidebarRelocation,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application,
  Media,
  MarkerList,
  List,
  SectionNote,
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
          person: (
            <></>
          ),
          gallery: (
            <></>
          ),
          asideSlider: <SidebarSlider data={data.factoids} />,
          'video': (
            <></>
          ),
          'quote': (
            <></>
          ),
          'comments': (
            <></>
          ),
          asideBlock: (
            <></>
          ),
        }[type]
    }
  </>
  )
};

const ArticleContent = ({ content }) => (
  <>
    {content.length !== 0 && (
      <S.Wrapper>
        {content.map((el, index) => (
          <S.Element key={index}>{renderContent(el)}</S.Element>
        ))}
      </S.Wrapper>
    )}
  </>
);

export default ArticleContent;
