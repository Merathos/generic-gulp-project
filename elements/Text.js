import styled from 'styled-components';

const Styled = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 158%;
`;

const TitleH5 = ({ content }) => <Styled>{content}</Styled>;

export default TitleH5;
