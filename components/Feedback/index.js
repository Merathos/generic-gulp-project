import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'elements/Text';
import TitleH3 from 'elements/TitleH4';
import Subtitle from 'elements/Subtitle';

const Feedback = props => {
  const {
    data: { img, name, company, text }
  } = props;
  return (
    <section>
      <img src={img} alt={name}/>
      <div>
        <Subtitle content={company} />
        <TitleH3>{name}</TitleH3>
        <Text content={text}/>
      </div>
    </section>
  );
};

Feedback.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Feedback;
