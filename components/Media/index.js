import PropTypes from 'prop-types';
import { Section, Text } from './styles';

const Media = props => {
  const {
    data: { subtitle, src, srcPoster },
    type,
    decoration
  } = props;
  return (
    <Section decoration={decoration}>
      {type === 'img' ? (
        <img src={src} alt={subtitle} />
      ) : (
        <video poster={srcPoster}>
          <track kind="captions" src={src} />
        </video>
      )}
      <Text content={subtitle} />
    </Section>
  );
};

Media.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  type: PropTypes.string
};

Media.defaultProps = {
  type: 'img'
};

export default Media;
