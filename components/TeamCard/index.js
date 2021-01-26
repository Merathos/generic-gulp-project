import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText, Arrow, Picture } from './styles';

const TeamCard = (props) => {
  const {
    data: { name, slug, summary, image },
  } = props;

  return (
    <Link href={`/teams/${slug}`} passHref>
      <Section>
        {image && (
          <Picture
            src={image?.path?.normal}
            srcSet={`${image?.path?.retina} 2x`}
            alt={name}
            width="350"
            height="194"
            loading="lazy"
          />
        )}
        {name && <H3>{name}</H3>}
        {summary && <StyledText>{summary}</StyledText>}
        <Arrow>
          <ArrowRight />
        </Arrow>
      </Section>
    </Link>
  );
};

export default TeamCard;
