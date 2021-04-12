import { HighlightCard, StoryCard, ColumnCard } from 'components';
import { useEffect, useRef } from 'react';
import * as S from './styles';

const BlogGrid = ({ cards }) => {
  const grid = useRef(null);

  useEffect(() => {
    function resizeMasonryItem(item, index) {
      const rowGap = parseInt(
        window.getComputedStyle(grid.current).getPropertyValue('grid-row-gap'),
        10
      );
      const rowHeight = parseInt(
        window
          .getComputedStyle(grid.current)
          .getPropertyValue('grid-auto-rows'),
        10
      );

      const rowSpan = Math.ceil(
        (item.querySelector('.js-content').getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );

      if (index === 1 && !item.className.includes('js-item-history')) {
        item.style.gridRowEnd = `span ${rowSpan + 1}`;
      } else {
        item.style.gridRowEnd = `span ${rowSpan}`;
      }
    }

    function resizeAllMasonryItems() {
      const allItems = grid.current.querySelectorAll('.js-item');

      allItems.forEach((el, index) => {
        resizeMasonryItem(el, index);
      });
    }

    const masonryEvents = ['load', 'resize'];
    masonryEvents.forEach((event) => {
      window.addEventListener(event, resizeAllMasonryItems);
    });

    resizeAllMasonryItems();

    return () => {
      masonryEvents.forEach((event) => {
        window.removeEventListener(event, resizeAllMasonryItems);
      });
    };
  });

  return (
    <S.Grid ref={grid}>
      {cards.map((item) => {
        return (
          <S.Item
            key={item.id}
            className={`js-item ${
              item.type === 'history' ? 'js-item-history' : ''
            }`}
            isHighlight={item.is_highlight}
          >
            {item.is_highlight ? (
              <HighlightCard
                data={item}
                bgImg="/backgrounds/highlight.svg"
                bgMob="/backgrounds/highlight-mob.svg"
              />
            ) : item.type === 'history' ? (
              <StoryCard data={item} />
            ) : (
              <ColumnCard data={item} />
            )}
          </S.Item>
        );
      })}
    </S.Grid>
  );
};

export default BlogGrid;
