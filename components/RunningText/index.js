import Router from 'next/router';
import { Container, Link } from './styles';
import { useEffect, useRef, useState } from 'react';

const handleSearch = searchValue => {
  Router.push({
    pathname: '/vacancies',
    query: { search: searchValue },
  }).then(() => window.scrollTo(0, 0));
};

const RunningText = ({ data }) => {
  const [step, setStep] = useState(0);
  const [isHovered, setHover] = useState(false);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = time => {
    if (previousTimeRef.current !== undefined && isHovered === false) {
      setStep(prevStep => (prevStep > 104 ? 0 : prevStep + 0.05));
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
      <svg viewBox="0 0 600 240">
        <path
          id="curve"
          d="M 50 50 Q 100 75 150 50 Q 225 0 300 50 Q 375 100 450 50 Q 500 25 550 50 Q 575 200 300 200 Q 0 200 50 50 "
          fill="transparent"
        />
        <text width="1440" fill="#feb251">
          <textPath
            alignmentBaseline="top"
            xlinkHref="#curve"
            startOffset={-step + '%'}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {[...data, ...data].map((technology, index) => (
              <Link key={index} onClick={() => handleSearch(technology)}>
                {technology}
                {'       '}
              </Link>
            ))}
          </textPath>
        </text>
      </svg>
    </Container>
  );
};

export default RunningText;
