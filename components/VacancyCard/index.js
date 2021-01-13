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
  const { name, descr, slug } = data;

  return (
    <Link href={`/vacancies/${slug}`} passhref>
      <a>
        <Section>
          <Badge>
            <IconWrapper name="graduation-cap" />
            <Inscription>Стажировка</Inscription>
          </Badge>
          <H3>{name}</H3>
          <StyledText>{descr}</StyledText>
          <Arrow>
            <ArrowRight />
          </Arrow>
        </Section>
      </a>
    </Link>
  );
};

export default VacancyCard;
