import styled from 'styled-components';

export const Container = styled.div`
  max-width: 235px;

  @media (max-width: 1199px) {
    max-width: 100%;
  }
`;

export const Link = styled.button`
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 700;
  color: #53b443;
  transition: all 0.3s ease-in;

  &:hover,
  &:active {
    color: #339722;
  }

  @media (max-width: 1199px) {
    display: inline-block;
  }

  @media (max-width: 910px) {
    font-size: 14px;
    line-height: 18.34px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 500;

  @media (max-width: 910px) {
    font-size: 14px;
    line-height: 18.34px;
  }
`;
