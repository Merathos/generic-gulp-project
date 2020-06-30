import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';
import TitleH3 from 'elements/TitleH3';
import Text from 'elements/Text';
import Button from 'elements/Button';
import Link from 'next/link';
import ArrowRight from 'public/icons/arrow-right.svg';

const Section = styled.section`
  max-width: 380px;

  /* @media screen and (max-width: 420px) {
    padding-top: 60px;
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  } */
`;

// const Text = styled.p`
//   max-width: 627px;
//   margin-bottom: 20px;

//   /* @media screen and (max-width: 420px) {
//     margin-bottom: 40px ;
//   } */
// `;

const Bold = styled.b`
  font-weight: 800;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 17px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
`;

const Container = styled.div`
  display: flex;
  margin-top: 60px;

  /* @media screen and (max-width: 420px) {
    margin-bottom: 40px ;
  } */
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
