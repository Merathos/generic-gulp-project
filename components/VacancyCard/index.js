import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import {
  Section,
  Badge,
  IconWrapper,
  Inscription,
  H3,
  StyledText,
  Arrow,
} from './styles';

const VacancyCard = ({ data }) => {
  const { type, name, description, href } = data;

  return (
    <Link href={`/vacancies/${href}`} passhref>
      <a>
        <Section>
          <Badge>
            <IconWrapper name="graduation-cap" />
            <Inscription>{type}</Inscription>
          </Badge>
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

export default VacancyCard;
