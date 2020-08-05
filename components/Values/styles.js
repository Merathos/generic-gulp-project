import styled from 'styled-components';
import { TitleH2, TitleH4, Icon } from 'elements';

export const Title = styled(TitleH2)`
  margin-bottom: 100px;
`;

export const H4 = styled(TitleH4)`
  margin-bottom: 24px;
`;
 
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 75px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-gap: 45px;
  } 
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 40px;
`;