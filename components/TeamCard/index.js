import Link from 'next/link';
import { Section, H3, StyledText, Arrow, Picture } from './styles';
import ArrowRight from 'public/icons/arrow-right.svg';

const TeamCard = props => {
  const {
    data: { name, slug, summary, image },
    isMain = false,
  } = props;

  return (
    <Link href={`teams/projects/${slug}`}>
      <a>
        <Section isMain={isMain}>
          <Picture
            src={image && image.path.normal}
            alt={name}
            width="350"
            height="194"
          />
          <H3 isMain={isMain}>{name}</H3>
          <StyledText isMain={isMain}>{summary}</StyledText>
          <Arrow isMain={isMain}>
            <ArrowRight />
          </Arrow>
        </Section>
      </a>
    </Link>
  );
};

export default TeamCard;
