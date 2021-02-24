import { InfographicsList } from 'components';
import { useState, useEffect, useRef } from 'react';
import * as S from './styles';

const timeStep = 4000;

const Infographics = ({ data }) => {
  const infographics = useRef(null);
  const [isAutoplay, setAutoplay] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const options = {
    root: null,
    rootMargin: '20px',
    threshold: 1,
  };

  const handleItemHover = (isHovered, index) => {
    if (isHovered) {
      setAutoplay(false);
      setActiveItemIndex(index);
    } else {
      if (isInViewport) {
        setAutoplay(true);
      }
      setActiveItemIndex(null);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
      setAutoplay(entry.isIntersecting);
      setActiveItemIndex(!entry.isIntersecting ? null : 0);
    }, options);

    observer.observe(infographics.current);

    return () => {
      observer.unobserve(infographics.current);
    };
  }, []);

  useEffect(() => {
    let timer;
    const increaseIndex = () => {
      setActiveItemIndex((prev) => {
        if (prev === null) {
          return 0;
        }
        return prev < data.infographicsData.length - 1 ? prev + 1 : 0;
      });
      timer = setTimeout(increaseIndex, timeStep);
    };

    if (isAutoplay) {
      timer = setTimeout(increaseIndex, timeStep);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isAutoplay]);

  return (
    <S.Container>
      {data.titles.map((item, index) => (
        <S.H2 key={index}>{item}</S.H2>
      ))}
      <S.InfographicsContainer ref={infographics}>
        <InfographicsList
          activeItemIndex={activeItemIndex}
          data={data.infographicsData}
          onHover={handleItemHover}
        />
      </S.InfographicsContainer>
    </S.Container>
  );
};

export default Infographics;
