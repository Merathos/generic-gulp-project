import styled from 'styled-components';

const Styled = styled.p`
  font-size: 18px;
  line-height: 158%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;

const TitleH5 = ({ content, className }) => (
  <Styled className={className}>{content}</Styled>
);

export default TitleH5;
