import styled from 'styled-components';
import { TitleH2, TitleH3, Text } from 'elements';

export const H2 = styled(TitleH2)`
  margin-bottom: 40px;
  color: ${props => props.color || '#201F2A'};

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 30px;
  color: ${props => props.color || '#201F2A'};

  @media screen and (max-width: 420px) {
    margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  opacity: ${props => props.opacity || '1'};
  font-size: 20px;
  line-height: 158%;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;

export const Section = styled.section`
  margin-bottom: ${props => props.margin || "100px"};
  max-width: 854px;
  padding-top: ${props => (props.padding === 'h3' ? '30px' : '0')};

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;