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
    margin-bottom: 20px;
  }
`;

const TitleH1 = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default TitleH1;
