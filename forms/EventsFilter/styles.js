import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 112px;
  min-height: 250px;

  @media screen and (max-width: 1360px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    min-height: 215px;
  }
`;

export const List = styled.ul`
  margin-bottom: 32px;
`;

export const Item = styled.li`
  position: relative;
  margin-bottom: 27px;

  @media screen and (max-width: 910px) {
    margin-bottom: 28px;
  }
`;

export const ResetFilter = styled.button`
  display: inline-block;
  opacity: 0.5;
  font-size: 16px;
  line-height: 131%;
  position: relative;
  align-self: flex-start;
  padding-right: 16px;
  transition: all 0.3s ease-in;
  visibility: ${(p) => (p.show ? 'visible' : 'hidden')};

  &::after {
    content: '';
    background-image: url('/icons/close-filter.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0%;
  }

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 190%;
  }
`;
