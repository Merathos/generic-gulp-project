import styled from 'styled-components';

const Styled = styled.h4`
  font-size: 24px;
  line-height: 120%;
`;

const TitleH4 = ({ content }) => <Styled>{content}</Styled>;

export default TitleH4;
