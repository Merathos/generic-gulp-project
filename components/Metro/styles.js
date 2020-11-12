import styled from 'styled-components';

export const Container = styled.div`
  background-repeat: no-repeat;
  padding-top: 80px;

  @media screen and (max-width: 420px) {
    background-size: auto 33px;
    padding-top: 45px;
    font-size: 14px;
    line-height: 131%;
  }
`;

export const Title = styled.b`
  font-size: 16px;
  line-height: 20.96px;
  font-weight: bold;
  margin-bottom: 12px;
  display: block;

  @media screen and (max-width: 420px) {
    margin-bottom: 4px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 21.44px;
  opacity: 0.5;
`;
