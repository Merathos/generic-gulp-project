import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: ${props => props.margin || '160px'};

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => props.marginMobile || '80px'};
  }
`;