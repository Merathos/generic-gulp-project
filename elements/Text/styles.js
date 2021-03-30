import styled from 'styled-components';

export const Text = styled.p`
  font-size: 20px;
  line-height: 158%;
  font-weight: ${(props) => props.bold || 500};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
