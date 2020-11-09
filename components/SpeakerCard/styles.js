import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Photo = styled.img`
  margin-bottom: 32px;
  width: 363px;
  height: 252px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 315px;
    max-height: 216px;
  }
`;

export const Name = styled.p`
  margin-bottom: 14px;
  font-size: 34px;
  line-height: 40.8px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 22px;
    line-height: 26.4px;
  }
`;

export const Job = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 20.96px;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18.34px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 28.44px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22.12px;
  }
`;
