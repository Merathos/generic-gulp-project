import PropTypes from 'prop-types';
import { Section, H3, H2, Description } from './styles';

const Paragraph = props => {
  const {
    data: { title, text },
    size,
    color,
    opacity,
    bold,
    margin,
    padding
  } = props;
  return (
    <Section margin={margin} padding={size}>
      {title && (
        <>
          {size === 'h3' ? (
            <H3 content={title} color={color} />
          ) : (
            <H2 content={title} color={color} />
          )}
        </>
      )}
      <Description bold={bold} opacity={opacity}>
        {text}
      </Description>
    </Section>
  );
};

Paragraph.propTypes = {
  data: PropTypes.shape.isRequired,
  size: PropTypes.string
};

Paragraph.defaultProps = {
  size: 'h2'
};

export default Paragraph;
