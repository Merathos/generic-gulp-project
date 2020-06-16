import styled from 'styled-components';

const Styled = styled.h3`
  font-size: 34px;
  line-height: 120%;
`;

const TitleH3 = ({ content }) => <Styled>{content}</Styled>;

export default TitleH3;
