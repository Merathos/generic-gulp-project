import styled from 'styled-components';

const Styled = styled.h5`
  font-size: 16px;
  line-height: 131%;
`;

const TitleH5 = ({ content, className }) => (
  <Styled className={className}>{content}</Styled>
);

export default TitleH5;
