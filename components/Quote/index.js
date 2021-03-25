import { TitleH5, Subtitle } from 'elements';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const Quote = (props) => {
  const {
    data: { src, name, company, text, description },
    noQuoteAuthor,
  } = props;
  return (
    <S.Section noQuoteAuthor={noQuoteAuthor}>
      <S.Span>«</S.Span>
      <S.Block>
        {text && (
          <S.BlockQuote dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
        )}
        {name && (
          <S.Container>
            <S.Img src={src} alt={name} />
            <div>
              <TitleH5 dangerouslySetInnerHTML={{ __html: sanitize(name) }} />
              <Subtitle
                dangerouslySetInnerHTML={{
                  __html: sanitize(company),
                }}
              />
            </div>
          </S.Container>
        )}
        {description && (
          <S.Description
            dangerouslySetInnerHTML={{
              __html: sanitize(description),
            }}
          />
        )}
      </S.Block>
    </S.Section>
  );
};

export default Quote;
