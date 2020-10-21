import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
`;
