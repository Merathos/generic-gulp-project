import styled from 'styled-components';
import { TitleH4, TitleH5 } from '/elements';

export const Title = styled(TitleH4)`
  margin-bottom: 40px;
`;

export const H5 = styled(TitleH5)`
  margin-bottom: 12px;
`;

export const Section = styled.section`
  text-align: left;
  margin-bottom: 50px;
  margin-top: 40px;
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 120%;
  }
`;