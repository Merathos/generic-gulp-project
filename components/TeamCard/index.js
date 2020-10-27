import { useState } from 'react';
import Link from 'next/link';
import { Section, H3, StyledText, ArrowRight, Picture } from './styles';

const TeamCard = props => {
  const [hover, setHovered] = useState(false);
  const {
    data: { name, slug, summary, image }
  } = props;

  return (
    <Link href={`teams/projects/${slug}`}>
      <Section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Picture src={image && image.path.normal} alt={name} />
        <H3>{name}</H3>
        <StyledText>{summary}</StyledText>
        <ArrowRight hovered={hover} />
      </Section>
    </Link>
  );
};

export default TeamCard;
