import Router from 'next/router';
import { Container, Link } from './styles';
import { useEffect, useRef, useState } from 'react';

const startOffset = 65.5;
const endOffset = 0;

const handleSearch = searchValue => {
  Router.push({
    pathname: '/vacancies',
    query: { search: searchValue },
  }).then(() => window.scrollTo(0, 0));
};

const RunningText = ({ data }) => {
  const [step, setStep] = useState(startOffset);
  const [isHovered, setHover] = useState(false);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = time => {
    if (previousTimeRef.current !== undefined && isHovered === false) {
      setStep(prevStep =>
        prevStep <= endOffset ? startOffset : prevStep - 0.02
      );
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

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
            startOffset={step + '%'}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {[...data, ...data.slice(0, data.length / 2)].map(
              (technology, index) => (
                <Link
                  dx="10"
                  key={index}
                  onClick={() => handleSearch(technology)}
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
