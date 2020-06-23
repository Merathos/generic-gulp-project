import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH2 from 'elements/TitleH2';
import TitleH3 from 'elements/TitleH3';
import Text from 'elements/Text';

const H2 = styled(TitleH2)`
  margin-bottom: 40px;
  color: ${props => props.color || '#201F2A'};

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

const H3 = styled(TitleH3)`
  margin-bottom: 30px;
  color: ${props => props.color || '#201F2A'};

  @media screen and (max-width: 420px) {
    margin-bottom: 15px;
  }
`;

const Description = styled(Text)`
  margin-bottom: 50px;
  opacity: ${props => props.opacity || '1'};

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const Paragraph = props => {
  const {
    data: { title, text },
    size,
    color,
    opacity,
  } = props;
  return (
    <section className="main__special-offer special-offer">
      {title && (
        <>
          {size === 'h3' ? (
            <H3 content={title} color={color} />
          ) : (
            <H2 content={title} color={color} />
          )}
        </>
      )}
      <Description content={text} opacity={opacity} />
    </section>
  );
};

Paragraph.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  size: PropTypes.string
};

Paragraph.defaultProps = {
  size: 'h2'
};

export default Paragraph;
