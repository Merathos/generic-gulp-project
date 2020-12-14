import styled from 'styled-components';
import { Fragment } from 'react';
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
  margin-bottom: 40px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const H3 = styled(TitleH3)`
  margin-bottom: 30px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-bottom: 10px;
  }
`;

const StyledSlider = styled(Slider)`
  max-width: 850px;
`;

const Wrapper = styled.aside`
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 1240px) {
    position: static;
    margin-bottom: 50px;
  }

  @media (max-width: 420px) {
    margin-bottom: 0;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-right: -45px;
`;

const Block = styled.div`
  position: relative;
`;

const renderContent = (props, nextIsParagraph) => {
  const { type, data } = props;

  return (
    <>
      {
        {
          header:
            data.level === 2 ? <H2>{data.text}</H2> : <H3>{data.text}</H3>,
          paragraph: (
            <Paragraph
              bold="700"
              data={data}
              nextIsParagraph={nextIsParagraph}
            />
          ),
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
          gallery: (
            <SliderContainer>
              <StyledSlider
                pictures={data.factoids}
                fromEditor
                fromArticle
                isSmall
              />
            </SliderContainer>
          ),
          asideSlider: (
            <Wrapper>
              <SidebarSlider data={data.factoids} />
            </Wrapper>
          ),
          video: <Video data={data} />,
          quote: <Quote data={data} />,
          comments: <Comments data={data.factoids} />,
          asideBlock: (
            <Wrapper>
              <SidebarArticle type="default" data={data} fromEditor />
            </Wrapper>
          ),
          asideNote: (
            <Wrapper>
              <SidebarArticle type="icon" data={data} fromEditor />
            </Wrapper>
          ),
          user: <Userpic data={data} />,
        }[type]
      }
    </>
  );
};

const ASIDE_BLOCKS = {
  asideSlider: true,
  asideBlock: true,
  asideNote: true,
};

const ArticleContent = ({ content }) => (
  <>
    {content.length !== 0 &&
      content.map((el, index) => {
        // Don't render if block is aside
        if (ASIDE_BLOCKS[content[index]?.type]) return null;

        // Check if the next block after paragraph is paragraph
        let nextIsParagraph;
        if (
          (content[index].type === 'paragraph' &&
            content[index + 1]?.type === 'paragraph') ||
          (content[index].type === 'paragraph' &&
            ASIDE_BLOCKS[content[index + 1]?.type] &&
            content[index + 2]?.type === 'paragraph')
        ) {
          nextIsParagraph = true;
        }

        // Check if the next block is aside to render both
        if (ASIDE_BLOCKS[content[index + 1]?.type]) {
          return (
            <Block key={index}>
              {renderContent(el, nextIsParagraph)}
              {renderContent(content[index + 1])}
            </Block>
          );
        }

        return (
          <Fragment key={index}>{renderContent(el, nextIsParagraph)}</Fragment>
        );
      })}
  </>
);

export default ArticleContent;
