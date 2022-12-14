import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 105px;

  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }

  .swiper-container {
    overflow: visible;
  }
`;

export const Element = styled.div`
  flex-shrink: 0;
  height: 26px;
  margin-right: 12px;
`;
