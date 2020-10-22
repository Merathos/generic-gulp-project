import styled from 'styled-components';

export const Container = styled.div`
  max-width: 235px;

  @media (max-width: 1199px) {
    max-width: 100%;
  }
`;

export const Link = styled.a`
  font-weight: 700;
  color: #53B443;

  @media (max-width: 1199px) {
    display: inline-block;
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