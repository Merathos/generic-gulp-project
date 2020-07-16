import styled from 'styled-components';
import Subtitle from 'elements/Subtitle';

export const Text = styled(Subtitle)`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-top: 5px;
    margin-bottom: 100px;
  }
`;

export const Element = styled.div`
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    margin-bottom: 8px;
  }
`;

export const Section = styled.section`
  margin-bottom: 130px;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
    width: 300px;
  }
`;

export const Img = styled.img`
  width: 706px;
  margin-right: 40px;

  @media screen and (max-width: 420px) {
    width: 301px;
    margin-right: 12px;
  }
`;
