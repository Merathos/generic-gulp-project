import styled from 'styled-components';

export const CloseBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 37px;
  margin-bottom: 75px;
  position: sticky;
  z-index: 50;
  top: 38px;

  svg {
    opacity: 0.3;
    transition: all 0.2s ease-in;
  }

  &:hover {
    svg {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 767px) {
    margin-right: 22px;
    margin-bottom: 0;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`;
