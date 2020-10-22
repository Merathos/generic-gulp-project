import styled from 'styled-components';
import { FilterButton } from 'elements';

export const Wrapper = styled.div`
  margin-bottom: 115px;

  @media (max-width: 1199px) {
    margin-bottom: 40px;
  }
`;

export const List = styled.ul`
  margin-bottom: 28px;
`;

export const Item = styled.li`
  position: relative;
  margin-bottom: 22px;

  @media (max-width: 910px) {
    margin-bottom: 23px;
  }
`;

export const ResetFilter = styled.button`
  opacity: 0.5;
  font-size: 16px;
  line-height: 131%;
  position: relative;
  align-self: flex-start;
  padding-right: 16px;

  &::after {
    content: '';
    background-image: url('icons/close-filter.svg');
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0%;
  }

  @media (max-width: 1199px) {
    display: none;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
  }
`;