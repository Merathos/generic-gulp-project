import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleH2 = styled.h2`
  font-weight: 800;
  font-size: 54px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const TitleH3 = styled.h3`
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
`;

const Media = props => {
  const {
    data: { subtitle, src },
    type
  } = props;
  return (
    <section className="main__special-offer special-offer">
      {type === 'img' ? (
        <img src={src} alt={subtitle} />
      ) : (
        <video>
          <track kind="captions" src={src} />
        </video>
      )}
      <Text>{subtitle}</Text>
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
