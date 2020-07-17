import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TitleH4 from 'elements/TitleH4';
import Subtitle from 'elements/Subtitle';
import ArrowRight from 'public/icons/arrow-right.svg';

const H4 = styled(TitleH4)`
  margin-bottom: 30px;

  @media (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

const Section = styled.section`
  text-align: left;
  background-image: url('backgrounds/relocation.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 120%;
  padding: 120px 20px 20px;

  @media (max-width: 420px) {
    margin-bottom: 90px;
    padding: 90px 0 0;
    background-size: 80%;
    background-position: top left;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 60px;

  @media (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const SidebarRelocation = props => {
  const {
    data: { title, subtitle }
  } = props;
  return (
    <Section>
      <H4 content={title} />
      <StyledSubtitle content={subtitle} />
      <Link href="/about">
        <a>
          <ArrowRight />
        </a>
      </Link>
    </Section>
  );
};

SidebarRelocation.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }).isRequired
};

export default SidebarRelocation;
