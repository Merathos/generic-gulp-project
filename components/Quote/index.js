import TitleH5 from 'elements/TitleH5';
import Subtitle from 'elements/Subtitle';
import { sanitize } from 'isomorphic-dompurify';
import { Section, Span, Block, Container, Img, Description } from './styles';

const Quote = props => {
  const {
    data: { src, name, company, text, description },
    noQuoteAuthor,
  } = props;
  return (
    <Section noQuoteAuthor={noQuoteAuthor}>
      <Span>«</Span>
      <Block>
        <blockquote dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
        {name && (
          <Container>
            <Img src={src} alt={name} />
            <div>
              <TitleH5 dangerouslySetInnerHTML={{ __html: sanitize(name) }} />
              <Subtitle
                dangerouslySetInnerHTML={{
                  __html: sanitize(company),
                }}
              />
            </div>
          </Container>
        )}
        {description && (
          <Description
            dangerouslySetInnerHTML={{
              __html: sanitize(description),
            }}
          />
        )}
      </Block>
    </Section>
  );
};

export default Quote;
