import { useState } from 'react';
import Link from 'next/link';
import { Section, H3, StyledText, ArrowRight } from './styles';

const Advert = ({ data }) => {
  const [hover, setHovered] = useState(false);

  return (
    <Section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <H3 content={data.title} />
      <StyledText>{data.text}</StyledText>
      <Link href="/about">
        <ArrowRight hovered={hover} />
      </Link>
    </Section>
  );
};

export default Advert;
