import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { useRef } from 'react';
import { Section, Element, Img, Text, Title } from './styles';

const Slider = ({ subtitle, pictures }) => {
  const ref = useRef(null);
  // const {
  //   data: { subtitle, pictures }
  // } = props;

  return (
    <Section>
      <Swiper ref={ref}>
        {pictures.map((el, i) => (
          <Element key={i}>
            <Img src={el.src} alt={el.alt} />
            {el.title && <Title>{el.title}</Title>}
          </Element>
        ))}
      </Swiper>
      {subtitle && <Text>{subtitle}</Text>}
    </Section>
  );
};

Slider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Slider;
