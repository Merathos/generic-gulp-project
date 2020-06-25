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

const Element = styled.li`
  min-width: 254px;
`;

const List = styled.ul`
  display: flex;
  overflow-x: hidden;
`;

const SidebarSlider = props => {
  const { data } = props;
  return (
    <article>
      <div>
        <List>
          {data.map(el => (
            <Element>
              <Img src={el.image} alt={el.alt} />
              <H4 content={el.title} />
              <Text content={el.description} />
            </Element>
          ))}
        </List>
      </div>
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
    </article>
  );
};

export default SidebarSlider;
