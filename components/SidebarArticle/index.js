import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TitleH4 from 'elements/TitleH4';
import Subtitle from 'elements/Subtitle';
import GreenArrowLeft from 'public/icons/green-arrow-left.svg';
import GreenArrowRight from 'public/icons/green-arrow-right.svg';

const Title = styled.h3`
  margin-bottom: 40px;
`;

const Section = styled.section`
  text-align: left;
`;

const Description = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
`;

const Img = styled.img`
  max-width: 120px;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    max-width: 74px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const H4 = styled(TitleH4)`
  margin-bottom: 12px;

  @media screen and (max-width: 420px) {
    margin-bottom: 8px;
  }
`;

const StyledLink = styled.a`
  width: 20px;
  height: 15px;
  display: block;
  margin-right: 20px;
`;

const Arrows = styled.div`
  display: flex;
`;

const Text = styled(Subtitle)`
  margin-bottom: 40px;
`;

const SidebarArticle = props => {
  const {
    data: { image, title, subtitle, description, icon },
    type
  } = props;
  return (
    <Section>
      {
        {
          'picture': (
            <>
              <Img src={image} alt={title} />
              <H4 content={title} />
              <Text content={description} />
              <Arrows>
                <Link href="/about">
                  <StyledLink>
                    <GreenArrowLeft />
                  </StyledLink>
                </Link>
                <Link href="/about">
                <StyledLink>
                  <GreenArrowRight />
                </StyledLink>
                </Link>
              </Arrows>
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
    </Section>
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
