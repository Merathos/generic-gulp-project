import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import { Section, Element, Img, Text } from './styles';

const Slider = props => {
  const ref = useRef(null);
  const {
    data: { subtitle, pictures }
  } = props;

  return (
    <Section>
      <Swiper ref={ref}>
        {pictures.map((el, i) => (
          <Element key={i}>
            <Img src={el.src} alt={el.alt} />
          </Element>
        ))}
      </Swiper>
      <Text content={subtitle} />
    </Section>
  );
};

Slider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Slider;
