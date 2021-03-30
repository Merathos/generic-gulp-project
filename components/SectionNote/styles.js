import styled from 'styled-components';

export const Text = styled.p`
  font-size: 20px;
  line-height: 158%;
  font-weight: bold;

  a {
    display: inline-block;
    font-weight: 700;
    color: #53b443;
    transition: color 0.3s ease;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

export const Section = styled.section`
  max-width: 850px;
  padding: 40px 0 42px;
  border-top: 2px solid rgba(31, 32, 42, 0.1);
  border-bottom: 2px solid rgba(31, 32, 42, 0.1);
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 57px 1fr;
  grid-column-gap: 30px;

  @media screen and (max-width: 767px) {
    padding: 20px 0 30px;
    grid-template-columns: 1fr;
    grid-template-rows: 43px 1fr;
    grid-row-gap: 12px;
    margin-bottom: 50px;
  }
`;
