import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 160px;
  padding: 135px 0;
  padding-bottom: 160px;
  background-color: #f7f8f9;

  @media (max-width: 768px) {
    padding-top: 56px;
    padding-bottom: 47px;
  }
`;
