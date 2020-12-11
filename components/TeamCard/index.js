import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText, Arrow, Picture } from './styles';

const TeamCard = props => {
  const {
    data: { name, slug, description, image },
  } = props;

  return (
    <Link href={`teams/${slug}`}>
      <a>
        <Section>
          {image && (
            <Picture
              src={image.path.normal}
              srcSet={`${image.path.retina} 2x`}
              alt={name}
              width="350"
              height="194"
            />
          )}
          <H3>{name}</H3>
          <StyledText>{description}</StyledText>
          <Arrow>
            <ArrowRight />
          </Arrow>
        </Section>
      </a>
    </Link>
  );
};

export default TeamCard;
