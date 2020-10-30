import Link from 'next/link';
import { Section, H3, StyledText, ArrowRight, Picture } from './styles';
import ArrowIcon from 'public/icons/arrow-right.svg';

const TeamCard = props => {
  const {
    data: { name, slug, summary, image },
    isMain = false,
  } = props;

  return (
    <Link href={`teams/projects/${slug}`}>
      <Section isMain={isMain} as={'a'}>
        <Picture src={image && image.path.normal} alt={name} />
        <H3 isMain={isMain}>{name}</H3>
        <StyledText isMain={isMain}>{summary}</StyledText>
        <ArrowRight isMain={isMain}>
          <ArrowIcon />
        </ArrowRight>
      </Section>
    </Link>
  );
};

export default TeamCard;
