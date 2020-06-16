import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';

const Blockquote = styled.blockquote`
  font-weight: bold;
  font-size: 34px;
  line-height: 120%;
`;

const Quote = props => {
  const {
    data: { img, name, company, text }
  } = props;
  return (
    <section className="main__special-offer special-offer">
      <Blockquote>{text}</Blockquote>
      <div>
        <img src={img} alt={name} />
        <div>
          <Subtitle content={company} />
          <TitleH5 content={name} />
        </div>
      </div>
    </section>
  );
};

Quote.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Quote;
