import styled from 'styled-components';
import { handleEditorLinks } from 'helpers/handle-editor-links';

const Description = styled.p`
  opacity: ${props => props.opacity || '1'};
  font-size: 20px;
  line-height: 158%;
  margin-bottom: 100px;
  max-width: 854px;

  mark {
    background: rgba(47, 142, 217, 0.1);
  }

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
    margin-bottom: 50px;
  }
`;

const Paragraph = props => {
  const {
    data: { text },
    opacity,
    bold,
  } = props;
  return (
    <Description
      bold={bold}
      opacity={opacity}
      dangerouslySetInnerHTML={{ __html: handleEditorLinks(text) }}
    />
  );
};

export default Paragraph;
