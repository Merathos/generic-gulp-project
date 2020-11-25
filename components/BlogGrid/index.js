import { HighlightCard, StoryCard, ColumnCard } from 'components';
import * as S from './styles';
import { useEffect, useRef } from 'react';

const BlogGrid = ({ cards }) => {
  const grid = useRef(null);

  useEffect(() => {
    function resizeMasonryItem(item) {
      const rowGap = parseInt(
        window.getComputedStyle(grid.current).getPropertyValue('grid-row-gap')
      );
      const rowHeight = parseInt(
        window.getComputedStyle(grid.current).getPropertyValue('grid-auto-rows')
      );

      const rowSpan = Math.ceil(
        (item.querySelector('.js-content').getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );

      item.style.gridRowEnd = 'span ' + rowSpan;
    }

    function resizeAllMasonryItems() {
      const allItems = grid.current.querySelectorAll('.js-item');

      allItems.forEach(el => {
        resizeMasonryItem(el);
      });
    }

    const masonryEvents = ['load', 'resize'];
    masonryEvents.forEach(function(event) {
      window.addEventListener(event, resizeAllMasonryItems);
    });

    resizeAllMasonryItems();

    return () => {
      masonryEvents.forEach(function(event) {
        window.removeEventListener(event, resizeAllMasonryItems);
      });
    };
  }, []);

  return (
    <S.Grid ref={grid}>
      {cards.map((el, i) => (
        <S.Item key={i} className="js-item">
          {el.type === 'highlight' ? (
            <HighlightCard data={el} />
          ) : el.type === 'story' ? (
            <StoryCard data={el} />
          ) : (
            <ColumnCard data={el} />
          )}
        </S.Item>
      ))}
    </S.Grid>
  );
};

export default BlogGrid;
