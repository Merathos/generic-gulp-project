import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';
import PropTypes from 'prop-types';
import { Section, Span, Blockquote, Container, Img } from './styles';

const Quote = props => {
  const {
    data: { src, name, company, text }
  } = props;
  return (
    <Section>
      <Span>«</Span>
      <Blockquote>
        <p>{text}</p>
        <Container>
          <Img src={src} alt={name} />
          <div>
            <TitleH5 content={name} />
            <Subtitle>{company}</Subtitle>
          </div>
        </Container>
      </Blockquote>
    </Section>
  );
};

Quote.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Quote;
