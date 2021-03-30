import { useRef, useState } from 'react';
import * as S from './styles';

const CustomScrollbars = ({ children, onModal = false }) => {
  let timer;
  const scrollbar = useRef();
  const [scroll, setScroll] = useState(0);

  const handleScroll = (e) => {
    const scrollView = e.target;
    scrollView.classList.add('scroll-view--scrolling');
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollView.classList.remove('scroll-view--scrolling');
    }, 1200);
  };

  const handleScrollStart = () => {
    if (scrollbar) {
      const { scrollTop } = scrollbar.current.getValues();
      const deltaY = Math.abs(scrollTop - scroll);
      if (deltaY > 10) {
        scrollbar.current.scrollTop(scroll);
      }
    }
  };

  const handleUpdate = () => {
    if (scrollbar) {
      const { scrollTop } = scrollbar.current.getValues();
      setScroll(scrollTop);
    }
  };

  return (
    <S.StyledScrollbar
      universal
      autoHide={!onModal}
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => (
        <div
          {...props}
          className={onModal ? 'scroll-view--scrolling' : 'scroll-view'}
          onScroll={onModal ? () => {} : handleScroll}
        />
      )}
      onUpdate={handleUpdate}
      onScrollStart={handleScrollStart}
      ref={scrollbar}
    >
      {children}
    </S.StyledScrollbar>
  );
};

export default CustomScrollbars;
