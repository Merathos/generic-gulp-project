import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TitleH4 from 'elements/TitleH4';
import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';
import ArrowLeft from 'public/icons/arrow-left.svg';

const Title = styled(TitleH4)`
  margin-bottom: 40px;
`;

const H5 = styled(TitleH5)`
  margin-bottom: 12px;
`;

const Section = styled.section`
  text-align: left;
  margin-bottom: 50px;
`;

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description },
    type
  } = props;
  return (
    <Section>
      {
        {
          'icon': (
            <>
              <H5 content={title} />
              <Subtitle content={description} />
            </>
          ),
          'default': (
            <>
              <Subtitle content={subtitle} />
              <Title content={title} />
              <Link href="/about">
                <a>
                  <ArrowLeft />
                </a>
              </Link>
            </>
          )
        }[type]
      }
    </Section>
  );
};

SidebarArticle.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  type: PropTypes.string
};

SidebarArticle.defaultProps = {
  type: 'default'
};

export default SidebarArticle;
