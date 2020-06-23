import styled from 'styled-components';

const Styled = styled.h2`
  font-weight: 700;
  font-size: 54px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media screen and (max-width: 420px) {
    font-size: 28px;
    line-height: 130%;
  }
`;

const TitleH3 = ({ content, className }) => (
  <Styled className={className}>{content}</Styled>
);

export default TitleH3;
