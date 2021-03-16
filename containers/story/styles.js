import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 45px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 420px) {
    max-width: 375px;
    padding: 0 30px;
    overflow: hidden;
  }

  @media screen and (max-width: 240px) {
    max-width: 320px;
    padding: 0 20px;
  }
`;

export const ContentContainer = styled(Container)`
  margin-bottom: 160px;

  *:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const GreyContainer = styled.div`
  background-color: #f7f8f9;
  background-repeat: no-repeat;
  background-position: 118% 298%;
  overflow-x: hidden;

  &:first-child {
    margin-bottom: 160px;

    @media screen and (max-width: 420px) {
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;
