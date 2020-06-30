import styled from 'styled-components';
import TitleH3 from 'elements/TitleH3';
import Text from 'elements/Text';
import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';

const Section = styled.section`
  max-width: 380px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const StyledText = styled(Text)`
  margin-bottom: 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

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
