import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 50px;
  padding-left: 120px;
  padding-right: 120px;

  @media screen and (max-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
