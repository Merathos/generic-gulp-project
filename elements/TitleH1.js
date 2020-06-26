import styled from 'styled-components';

const Styled = styled.h2`
  font-size: 90px;
  line-height: 100px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    font-size: 32px;
    line-height: 134%;
  }
`;

const TitleH1 = ({ content, className }) => (
  <Styled className={className}>{content}</Styled>
);

export default TitleH1;
