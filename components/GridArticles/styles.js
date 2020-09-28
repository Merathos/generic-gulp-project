import styled from 'styled-components';
import { TitleH4, SmallText } from 'elements';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  margin-bottom: 80px;

  @media (max-width: 420px) {
    margin-bottom: 40px;
  }
`;

export const Main = styled.a`
  background-color: ${props => props.background || 'transparent'};
  padding: 60px 40px 40px;
  box-sizing: border-box;
  display: flex;
  width: 770px;
  align-items: flex-end;
  min-height: 430px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    min-height: 390px;
  }
`;

export const Title = styled(TitleH4)`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled(SmallText)`
  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

export const StyledSubtitle = styled.p`
  opacity: 0.5;
  margin-bottom: 4px;
`;

export const Picture = styled.img`
  margin-left: 40px;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;
