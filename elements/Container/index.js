import styled from 'styled-components';

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 120px;
  padding-right: 120px;

  @media screen and (max-width: 1360px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default Container;
