import Router from 'next/router';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Container, Link } from './styles';

const startOffset = 65.5;
const endOffset = 0;

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const handleSearch = (searchValue, stacks) => {
  const result = stacks.filter(
    item => item.name.toLowerCase() === searchValue.toLowerCase()
  );

  if (result[0]) {
    Router.push({
      pathname: '/vacancies',
      query: { technologies: result[0].slug },
    }).then(() => window.scrollTo(0, 0));
  } else {
    Router.push({
      pathname: '/vacancies',
    }).then(() => window.scrollTo(0, 0));
  }
};

const RunningText = ({ data, stacks }) => {
  const [step, setStep] = useState(startOffset);
  const [isHovered, setHover] = useState(false);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useIsomorphicLayoutEffect(() => {
    const animate = time => {
      if (previousTimeRef.current !== undefined && isHovered === false) {
        setStep(prevStep =>
          prevStep <= endOffset ? startOffset : prevStep - 0.01
        );
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <Container>
      <svg viewBox="0 0 2100 120">
        <path
          id="curve"
          fill="transparent"
          d="M 0 100 L 1175 50 Q 1400 100 1500 50 Q 1600 0 1700 50 Q 1800 100 1925 50 Q 2050 0 2090 10 "
        />
        <text fill="#feb251">
          <textPath
            xlinkHref="#curve"
            startOffset={`${step}%`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {[...data, ...data.slice(0, data.length / 3)].map(
              (technology, index) => (
                <Link
                  dx="10"
                  key={index}
                  onClick={() => handleSearch(technology, stacks)}
                >
                  {technology}
                </Link>
              )
            )}
          </textPath>
        </text>
      </svg>
    </Container>
  );
};

export default RunningText;
