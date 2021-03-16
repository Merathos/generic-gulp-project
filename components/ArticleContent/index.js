import { Fragment } from 'react';
import {
  Paragraph,
  SidebarSlider,
  Media,
  MarkerList,
  List,
  SectionNote,
  Feedback,
  Quote,
  Userpic,
  Comments,
  Video,
  SidebarArticle,
  SidebarRelocation,
} from 'components';
import vacancyMock from 'mock/vacancy';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

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
              <S.H2
                isFirstBlockHeader={isFirstBlockHeader}
                dangerouslySetInnerHTML={{
                  __html: sanitize(data.text),
                }}
              />
            ) : (
              <S.H3
                isFirstBlockHeader={isFirstBlockHeader}
                dangerouslySetInnerHTML={{
                  __html: sanitize(data.text),
                }}
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
            <S.SliderContainer>
              <S.StyledSlider
                pictures={data.factoids}
                fromEditor
                fromArticle
                isSmall
              />
            </S.SliderContainer>
          ),
          asideSlider: (
            <S.Wrapper>
              <SidebarSlider data={data.factoids} />
            </S.Wrapper>
          ),
          video: <Video data={data} recap={recap} />,
          quote: <Quote data={data} noQuoteAuthor={noQuoteAuthor} />,
          comments: <Comments data={data.factoids} />,
          asideBlock: (
            <S.Wrapper>
              <SidebarArticle type="default" data={data} fromEditor />
            </S.Wrapper>
          ),
          asideNote: (
            <S.Wrapper>
              <SidebarArticle type="icon" data={data} fromEditor />
            </S.Wrapper>
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
  // console.log(content);
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
              <S.Block key={index}>
                {renderContent(
                  el,
                  nextIsParagraph,
                  noQuoteAuthor,
                  isFirstBlockHeader
                )}
                {renderContent(content[index + 1])}
              </S.Block>
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
              <S.Block key={index}>
                {renderContent(
                  el,
                  nextIsParagraph,
                  noQuoteAuthor,
                  isFirstBlockHeader
                )}
                <S.Wrapper>
                  <SidebarRelocation
                    title={vacancyMock.relocation.title}
                    subtitle={vacancyMock.relocation.subtitle}
                    href={vacancyMock.relocation.href}
                  />
                </S.Wrapper>
              </S.Block>
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
