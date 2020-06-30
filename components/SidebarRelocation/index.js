import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TitleH4 from 'elements/TitleH4';
import Subtitle from 'elements/Subtitle';
import ArrowLeft from 'public/icons/arrow-left.svg';

const H4 = styled(TitleH4)`
  margin-bottom: 30px;

  @media (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

const Section = styled.section`
  text-align: left;

  @media (max-width: 420px) {
    margin-bottom: 90px;
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
          <ArrowLeft />
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
