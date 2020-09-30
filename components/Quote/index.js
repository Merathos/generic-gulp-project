import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';
import { Section, Span, Block, Container, Img, Description } from './styles';

const Quote = props => {
  const {
    data: { src, name, company, text, description }
  } = props;
  return (
    <Section>
      <Span>«</Span>
      <Block>
        <blockquote>{text}</blockquote>
        {name && (
          <Container>
            <Img src={src} alt={name} />
            <div>
              <TitleH5>{name}</TitleH5>
              <Subtitle>{company}</Subtitle>
            </div>
          </Container>
        )}
        {description && <Description>{description}</Description>}
      </Block>
    </Section>
  );
};

export default Quote;
