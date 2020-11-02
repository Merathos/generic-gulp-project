import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 410px;
  min-height: 74px;
  align-items: flex-end;
  margin-bottom: 10px;
  z-index: 15;

  .react-select-container {
    width: 100%;
  }

  .react-select__control {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid rgba(32, 31, 42, 0.5);
    border-radius: 0;
    padding-bottom: 8px;

    &:hover {
      border-color: #5faf52;
    }

    svg {
      transition: all 0.2s;
    }

    &--is-focused {
      border-color: #5faf52;

      .react-select__placeholder {
        top: -3px;
        font-size: 14px;
      }
    }

    &--menu-is-open {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .react-select__value-container {
    padding-left: 0;
    font-size: 18px;
  }

  .react-select__placeholder {
    margin-left: 0;
    line-height: 24px;
    color: rgba(32, 31, 42, 0.5);
  }

  .react-select__single-value {
    margin-left: 0;
    font-size: 20px;
    line-height: 31px;
    top: 70%;
  }

  .react-select__input {
    position: relative;
    top: 9px;
    font-size: 20px;

    input {
      font: inherit;
      max-width: 350px;
    }
  }

  .react-select__indicator-separator {
    background-color: transparent;
  }

  .react-select__indicator {
    padding-right: 0;
  }

  .react-select__menu {
    margin-top: 0;
    padding: 20px 30px;
    padding-bottom: 30px;
    border: none;
    box-shadow: none;
    background-color: #f7f8f9;
  }

  .react-select__option {
    position: relative;
    overflow: visible;
    padding: 5px 12px;
    padding-left: 18px;
    font-size: 16px;
    line-height: 30px;
    color: rgba(32, 31, 42, 0.5);

    &:hover {
      background-color: transparent;
    }

    &:active {
      background-color: transparent;
    }

    &--is-focused {
      background-color: transparent;
      color: #53b443;
    }

    &--is-selected {
      background-color: transparent;
      color: #53b443;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #53b443;
      }
    }
  }
`;
