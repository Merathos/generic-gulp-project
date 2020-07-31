import { useState } from 'react';
import Link from 'next/link';
import { Features } from 'components';
import { Section, H3, StyledText, ArrowRight } from './styles';

const Advert = props => {
  const [hover, setHovered] = useState(false);
  const {
    data: { title, text, features }
  } = props;

  return (
    <Section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {features && <Features data={features} />}
      <H3 content={title} />
      <StyledText>{text}</StyledText>
      <Link href="/about">
        <ArrowRight hovered={hover} />
      </Link>
    </Section>
  );
};

export default Advert;
