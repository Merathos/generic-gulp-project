import { useState } from 'react';
import Link from 'next/link';
import { Features } from 'components';
import { Section, H3, StyledText, ArrowRight } from './styles';

const Advert = props => {
  const [hover, setHovered] = useState(false);
  const {
    data: {
      name,
      descr,
      is_english_speaking_team,
      is_relocation,
      is_internship
    }
  } = props;

  const features = [
    {
      icon: `ec-earth-americas`,
      title: `English Speaking Team`,
      flag: is_english_speaking_team,
    },
    {
      icon: `ec-mortar-board`,
      title: `Стажировка`,
      flag: is_internship
    },
    {
      icon: `ec-mortar-board`,
      title: `Релокация`,
      flag: is_relocation
    }
  ];

  return (
    <Section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {features && <Features data={features} />}
      <H3>{name}</H3>
      <StyledText>{descr}</StyledText>
      <Link href="/about">
        <ArrowRight hovered={hover} />
      </Link>
    </Section>
  );
};

export default Advert;
