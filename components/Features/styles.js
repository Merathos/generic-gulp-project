import styled from 'styled-components';
import { Subtitle } from 'elements';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;

  @media screen and (max-width: 767px) {
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

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-right: 14px;
    }
  }
`;

export const Icon = styled.div`
  margin-right: 8px;
  font-size: 22px;
  background-image: ${(props) => `url('/emodzi/${props.name}.png')`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
  width: 22px;
  height: 22px;
`;

export const StyledSubtitle = styled(Subtitle)`
  font-size: 16px;
  line-height: 21px;
`;
