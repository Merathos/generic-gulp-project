import { handleEditorLinks } from 'helpers/handle-editor-links';
import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const Paragraph = (props) => {
  const {
    data: { text },
    opacity,
    nextIsParagraph,
    leadText,
  } = props;
  return (
    <S.Description
      leadText={leadText}
      opacity={opacity}
      dangerouslySetInnerHTML={{
        __html: sanitize(handleEditorLinks(text)),
      }}
      nextIsParagraph={nextIsParagraph}
    />
  );
};

export default Paragraph;
