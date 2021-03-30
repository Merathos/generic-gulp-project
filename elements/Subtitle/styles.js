import styled from 'styled-components';

export const Text = styled.p`
  font-size: 18px;
  line-height: 134%;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  b {
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 134%;
  }
`;
