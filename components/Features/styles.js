import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;

  @media screen and (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

export const Item = styled.li`
  display: flex;

  flex-shrink: 0;

  &:not(:last-child) {
    margin-right: 20px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 420px) {
    &:not(:last-child) {
      margin-right: 14px;
    }
  }
`;

export const Icon = styled.div`
  margin-right: 8px;
  font-size: 22px;
  background-image: ${props => `url('/emodzi/${props.name}.png')`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
  width: 22px;
  height: 22px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 131%;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 134%;
  }
`;
