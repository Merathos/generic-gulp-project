import styled from 'styled-components';
import PropTypes from 'prop-types';
import Subtitle from 'elements/Subtitle';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';

const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const Element = styled.div`
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    margin-bottom: 8px;
  }
`;

const Section = styled.section`
  margin-bottom: 130px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    width: 300px;
  }
`;

const Img = styled.img`
  width: 706px;
  margin-right: 40px;

  @media screen and (max-width: 420px) {
    width: 301px;
    margin-right: 12px;
  }
`;

const SliderVacancy = props => {

  const ref = useRef(null);
  const {
    data: { subtitle, pictures }
  } = props;

  return (
    <Section>
      {/* <Swiper ref={ref}>
        {pictures.map((el, i) => (
          <Element key={i}>
            <Img src={el.src} alt={el.alt} />
          </Element>
        ))}
      </Swiper>
      <Text content={subtitle} /> */}
    </Section>
  );
};

SliderVacancy.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SliderVacancy;
