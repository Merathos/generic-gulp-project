import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Title = styled.h3`
  margin-bottom: 40px;
`;

const Subtitle = styled.h3`
  margin-bottom: 40px;
`;

const Description = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
`;

const SidebarArticle = props => {
  const {
    data: { image, title, subtitle, description, icon },
    type
  } = props;
  return (
    <section>
      {
        {
          'picture': (
            <>
              <img src={image} alt={title} />
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Link href="/about">
                <a>{icon}</a>
              </Link>
              <Link href="/about">
                <a>{icon}</a>
              </Link>
            </>
          ),
          'icon': (
            <>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </>
          ),
          'default': (
            <>
              <Subtitle>{subtitle}</Subtitle>
              <Title>{title}</Title>
              <Link href="/about">{icon}</Link>
            </>
          )
        }[type]
      }
    </section>
  );
};

SidebarArticle.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  type: PropTypes.string
};

SidebarArticle.defaultProps = {
  type: 'default'
};

export default SidebarArticle;
