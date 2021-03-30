import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

export const StyledScrollbar = styled(Scrollbars)`
  .track-vertical {
    position: absolute;
    width: 3px !important;
    right: 0;
    bottom: 2px;
    top: 2px;
    border-radius: 6px;
    background-color: #f7f8f9;
    z-index: 10;
  }

  .thumb-vertical {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
    border-radius: inherit;
    background-color: #53b443 !important;
    height: 84px;
    transform: translateY(0px);
  }

  .scroll-view {
    max-width: 100%;
    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  }

  .scroll-view--scrolling {
    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: #f7f8f9;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #53b443;
      border-radius: 6px;
      border: 3px solid #53b443;
    }
  }

  &:hover {
    .scroll-view {
      ::-webkit-scrollbar {
        width: 3px;
      }

      ::-webkit-scrollbar-track {
        background: #f7f8f9;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #53b443;
        border-radius: 6px;
        border: 3px solid #53b443;
      }
    }

    .track-vertical {
      opacity: 1 !important;
    }
  }
`;
