import styled from 'styled-components';

const Styled = styled.h3`
  font-size: 34px;
  line-height: 120%;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    font-size: 22px;
    line-height: 120%;
    margin-bottom: 10px;
  }
`;

const TitleH3 = ({ children, className }) => (
  <Styled className={className}>{children}</Styled>
);

export default TitleH3;
