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

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 18px;
    }

    &:hover {
      cursor: pointer;

      @media (min-width: 1200px) {
        background-color: #53b443;
        color: #ffffff;
      }
    }
  }

  input:checked + span {
    background-color: #53b443;
    color: #ffffff;
  }
`;
