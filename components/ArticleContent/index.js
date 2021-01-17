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
  SidebarRelocation,
} from 'components';
import { TitleH2, TitleH3 } from 'elements';
import vacancyMock from 'mock/vacancy';

const H2 = styled(TitleH2)`
  margin-top: ${props => (props.isFirstBlockHeader ? '0' : '160px')};
  margin-bottom: 40px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-top: ${props => (props.isFirstBlockHeader ? '0' : '80px')};
    margin-bottom: 20px;
  }
`;

const H3 = styled(TitleH3)`
  margin-top: ${props => (props.isFirstBlockHeader ? '0' : '130px')};
  margin-bottom: 30px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-top: ${props => (props.isFirstBlockHeader ? '0' : '70px')};
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
  @media screen and (max-width: 768px) {
    margin-right: -30px;
  }
`;

const Block = styled.div`
  position: relative;
`;

const renderContent = (
  props,
  nextIsParagraph,
  noQuoteAuthor,
  isFirstBlockHeader,
  recap
) => {
  const { type, data } = props;

  return (
    <>
      {
        {
          header:
            data.level === 2 ? (
              <H2
                isFirstBlockHeader={isFirstBlockHeader}
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            ) : (
              <H3
                isFirstBlockHeader={isFirstBlockHeader}
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            ),
          paragraph: (
            <Paragraph data={data} nextIsParagraph={nextIsParagraph} />
          ),
          leadText: (
            <Paragraph data={data} nextIsParagraph={nextIsParagraph} leadText />
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
          video: <Video data={data} recap={recap} />,
          quote: <Quote data={data} noQuoteAuthor={noQuoteAuthor} />,
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

const ArticleContent = ({ content, isRelocation, recap }) => {
  let relocationAdded;
  let recapAdded;
  console.log(content);
  return (
    <>
      {content.length > 0 &&
        content.map((el, index) => {
          // Don't render if block is aside
          if (ASIDE_BLOCKS[content[index]?.type]) return null;

          // Check if first block is a header
          let isFirstBlockHeader = false;
          if (index === 0 && content[index].type === 'header') {
            isFirstBlockHeader = true;
          }

          // Check if after quote is author block
          let noQuoteAuthor = true;
          if (
            content[index].type === 'quote' &&
            (content[index + 1]?.type === 'user' ||
              (ASIDE_BLOCKS[content[index + 1]?.type] &&
                content[index + 2]?.type === 'user'))
          ) {
            noQuoteAuthor = false;
          }

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
                {renderContent(
                  el,
                  nextIsParagraph,
                  noQuoteAuthor,
                  isFirstBlockHeader
                )}
                {renderContent(content[index + 1])}
              </Block>
            );
          }

          // Add relocation aside
          if (
            isRelocation &&
            !relocationAdded &&
            !ASIDE_BLOCKS[content[index - 2]?.type] &&
            !ASIDE_BLOCKS[content[index - 1]?.type] &&
            !ASIDE_BLOCKS[content[index + 1]?.type] &&
            !ASIDE_BLOCKS[content[index + 2]?.type]
          ) {
            relocationAdded = true;
            return (
              <Block key={index}>
                {renderContent(
                  el,
                  nextIsParagraph,
                  noQuoteAuthor,
                  isFirstBlockHeader
                )}
                <Wrapper>
                  <SidebarRelocation
                    title={vacancyMock.relocation.title}
                    subtitle={vacancyMock.relocation.subtitle}
                    href={vacancyMock.relocation.href}
                  />
                </Wrapper>
              </Block>
            );
          }

          // Add first video recap ref in finished events
          if (recap && !recapAdded && content[index].type === 'video') {
            recapAdded = true;
            return (
              <Fragment key={index}>
                {renderContent(
                  el,
                  nextIsParagraph,
                  noQuoteAuthor,
                  isFirstBlockHeader,
                  recap
                )}
              </Fragment>
            );
          }

          return (
            <Fragment key={index}>
              {renderContent(
                el,
                nextIsParagraph,
                noQuoteAuthor,
                isFirstBlockHeader
              )}
            </Fragment>
          );
        })}
    </>
  );
};

export default ArticleContent;
