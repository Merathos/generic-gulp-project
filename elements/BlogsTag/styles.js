import styled from 'styled-components';

export const Label = styled.label`
  margin-right: 12px;

  span {
    display: flex;
    flex-shrink: 0;
    background-color: #f7f8f9;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 16px;
    line-height: 21px;
    transition: all 0.2s ease-in;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }

    &:hover {
      cursor: pointer;

      @media screen and (min-width: 1000px) {
        background-color: #53b443;
        color: #ffffff;
      }
    }
  }

  input:checked + span,
  input:active + span {
    background-color: #339722;
    color: #ffffff;
  }
`;
