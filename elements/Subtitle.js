import styled from 'styled-components';

const Styled = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 134%;
  color: #201f2a;
  opacity: 0.5;
`;

const Subtitle = ({ content }) => <Styled>{content}</Styled>;

export default Subtitle;
