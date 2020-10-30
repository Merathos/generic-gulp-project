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
      setStep(prevStep => (prevStep > 214 ? 0 : prevStep + 0.08));
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
      <svg viewBox="0 0 550 250">
        <path
          id="curve"
          fill="transparent"
          d="M 0 75 Q 50 100 125 50 Q 200 0 275 50 Q 350 100 425 50 Q 500 0 550 0 "
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
