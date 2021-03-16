import { Scrollbars } from 'react-custom-scrollbars';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledScrollbar = styled(Scrollbars)`
  .track-vertical {
    position: absolute;
    width: 3px !important;
    right: 0;
    bottom: 2px;
    top: 2px;
    border-radius: 6px;
    background-color: #f7f8f9;
    z-index: 10;
  }

  .thumb-vertical {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
    border-radius: inherit;
    background-color: #53b443 !important;
    height: 84px;
    transform: translateY(0px);
  }

  .scroll-view {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  }

  .scroll-view--scrolling {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: #f7f8f9;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #53b443;
      border-radius: 6px;
      border: 3px solid #53b443;
    }
  }

  &:hover {
    .track-vertical {
      opacity: 1 !important;
    }
  }
`;

const CustomScrollbars = ({ children, onModal = false }) => {
  // let timer;
  const scrollbar = useRef();
  const [scroll, setScroll] = useState(0);

  // const handleScroll = (e) => {
  //   const scrollView = e.target;
  //   scrollView.classList.add('scroll-view--scrolling');
  //   clearTimeout(timer);
  //   timer = setTimeout(() => {
  //     scrollView.classList.remove('scroll-view--scrolling');
  //   }, 1200);
  // };

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
    <StyledScrollbar
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
          // onScroll={onModal ? () => {} : handleScroll}
        />
      )}
      onUpdate={handleUpdate}
      onScrollStart={handleScrollStart}
      ref={scrollbar}
    >
      {children}
    </StyledScrollbar>
  );
};

export default CustomScrollbars;
