import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText, Arrow, Picture } from './styles';

const TeamCard = props => {
  const {
    data: { name, slug, summary, image },
  } = props;

  return (
    <Link href={`teams/${slug}`}>
      <a>
        <Section>
          <Picture
            src={image && image.path.normal}
            alt={name}
            width="350"
            height="194"
          />
          <H3>{name}</H3>
          <StyledText>{summary}</StyledText>
          <Arrow>
            <ArrowRight />
          </Arrow>
        </Section>
      </a>
    </Link>
  );
};

export default TeamCard;
