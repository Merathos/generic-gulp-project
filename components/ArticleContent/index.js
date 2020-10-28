import { renderContent } from 'helpers';
import * as S from './styles';

const ArticleContent = ({ content }) => (
  <>
    {content.length !== 0 && (
      <S.Wrapper>
        {content.map((el, index) => (
          <S.Element key={index}>{renderContent(el)}</S.Element>
        ))}
      </S.Wrapper>
    )}
  </>
);

export default ArticleContent;
