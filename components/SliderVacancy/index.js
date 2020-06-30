import styled from 'styled-components';
import PropTypes from 'prop-types';
import Subtitle from 'elements/Subtitle';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import TitleH2 from 'elements/TitleH2';

const Text = styled(Subtitle)`
  margin-bottom: 37px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const Element = styled.div`
  margin-right: 20px;
  max-width: 460px;
  padding-right: 130px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #2F8ED9;
    top: 10px;
    left: 0;
    z-index: -2;
  }

  @media screen and (max-width: 420px) {
    margin-right: 15px;
    padding-right: 30px;
  }
`;

const Section = styled.section`
  margin-bottom: 130px;
  width: 1600px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    width: 1200px;
  }
`;

const Number = styled.span`
  display: block;
  font-weight: 800;
  font-size: 18px;
  line-height: 120%;
  color: #2F8ED9;
  z-index: 2;
  margin-bottom: 40px;
  background-color: #fff;
  padding-right: 20px;
  width: 20px;

  @media screen and (max-width: 420px) {
    width: 301px;
    margin-right: 12px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 120%;
    margin-bottom: 8px;
  }
`;

const H2 = styled(TitleH2)`
  max-width: 520px;
  margin-bottom: 80px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const SliderVacancy = ({ data }) => {
  const ref = useRef(null);
  const { title, list } = data;

  return (
    <Section>
      <H2 content={title} />
      <Swiper ref={ref}>
        {list.map((el, i) => (
          <Element key={i}>
            <Number>{`0${i + 1}`}</Number>
            <Title>{el.title}</Title>
            <Text content={el.text} />
            {el.subtitle && <Subtitle>{el.subtitle}</Subtitle>}
          </Element>
        ))}
      </Swiper>
    </Section>
  );
};

SliderVacancy.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SliderVacancy;
