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
      setStep(prevStep => (prevStep > 261.7 ? 0 : prevStep + 0.08));
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
          d="M 0 100 Q 50 100 75 75 Q 150 25 225 75 Q 300 125 375 75 Q 400 50 450 50"
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
