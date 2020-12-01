import { useState } from 'react';
import Link from 'next/link';
import { Features } from 'components';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText, Arrow } from './styles';

const Advert = ({
  data: {
    name,
    descr,
    is_english_speaking_team,
    is_relocation,
    is_internship,
    slug,
  },
}) => {
  const [hover, setHovered] = useState(false);

  let features = [];

  if (is_english_speaking_team || is_relocation || is_internship) {
    features = [
      {
        icon: 19,
        title: `English Speaking Team`,
        flag: is_english_speaking_team,
      },
      {
        icon: 18,
        title: `Стажировка`,
        flag: is_internship,
      },
      {
        icon: 26,
        title: `Релокация`,
        flag: is_relocation,
      },
    ];
  }

  return (
    <Link href={`vacancies/${slug}`}>
      <Section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {features && features.length > 0 && <Features data={features} />}
        {name && <H3>{name}</H3>}
        {descr && <StyledText>{descr}</StyledText>}
        <Arrow>
          <ArrowRight />
        </Arrow>
      </Section>
    </Link>
  );
};

export default Advert;
