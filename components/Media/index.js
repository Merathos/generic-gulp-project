import styled from 'styled-components';
import PropTypes from 'prop-types';
import Subtitle from 'elements/Subtitle';

const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

const Media = props => {
  const {
    data: { subtitle, src },
    type
  } = props;
  return (
    <section>
      {type === 'img' ? (
        <img src={src} alt={subtitle} />
      ) : (
        <video>
          <track kind="captions" src={src} />
        </video>
      )}
      <Text content={subtitle} />
    </section>
  );
};

Media.propTypes = {
  data: PropTypes.objectOf({
    subtitle: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  type: PropTypes.string
};

Media.defaultProps = {
  type: 'h2'
};

export default Media;
