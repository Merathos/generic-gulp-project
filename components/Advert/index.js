import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, H3, StyledText } from './styles';

const Advert = ({ data }) => {
  return (
    <Section>
      <H3 content={data.title} />
      <StyledText content={data.text} />
      <Link href="/about">
        <a>
          <ArrowRight />
        </a>
      </Link>
    </Section>
  );
};

export default Advert;
