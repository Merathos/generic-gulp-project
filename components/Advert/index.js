import Link from 'next/link';
import { Features } from 'components';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText, Arrow } from './styles';

const Advert = ({
  data: { name, descr, is_english_speaking_team, is_internship, slug },
}) => {
  let features = [];

  if (is_english_speaking_team || is_internship) {
    features = [
      {
        icon: `globe`,
        title: `English practice`,
        flag: is_english_speaking_team,
      },
      {
        icon: `graduation-cap`,
        title: `Стажировка`,
        flag: is_internship,
      },
    ];
  }

  return (
    <Link href={`/vacancies/${slug}`}>
      <a>
        <Section>
          {features && features.length > 0 && <Features data={features} />}
          {name && <H3>{name.replace(/<br\s*\/?>/g, '')}</H3>}
          {descr && <StyledText>{descr}</StyledText>}
          <Arrow>
            <ArrowRight />
          </Arrow>
        </Section>
      </a>
    </Link>
  );
};

export default Advert;
