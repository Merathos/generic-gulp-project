import styled from 'styled-components';

const Styled = styled.p`
  font-size: 24px;
  line-height: 158%;
  font-weight: ${props => props.bold || 500};

  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 158%;
  }
`;

const Text = ({ children, className, bold }) => (
  <Styled className={className} bold={bold}>{children}</Styled>
);

export default Text;
