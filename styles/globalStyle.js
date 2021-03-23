import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: #201F2A;
    font-family: 'TT Norms', 'Arial', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 158%;
    overflow-x: hidden;
    font-variant-ligatures: none;
  }

  @media screen and (max-width: 420px) {
    body {
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
    color: #201F2A;
    font-weight: 500;
    display: block;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  a:hover,
  a:focus {
    color: #53B443;
  }

  a:active {
    color: #339722;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    text-align: left;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 800;
  }

  img, video {
    width: 100%;
    height: auto;
  }

  input[type="checkbox"],
  input[type="radio"]{
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    overflow: hidden;
    top: -20px;
    left: -20px;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-container {
    overflow: hidden;
  }

  .swiper-container-autoheight {
    &,
    .swiper-slide {
      height: auto;
    }

    .swiper-wrapper {
      align-items: flex-start;
      transition-property: transform, height;
    }
  }

  .ReactModal__Body--open {
    overflow: hidden;
    margin-right: 17px;
  }

  .formModal {
    top: 40px;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    position: absolute;
    overflow: auto;
    outline: none;
    background-color: #ffffff;

    @media screen and (max-width: 1199px) {
      top: 0;
      bottom: 0;
      padding-top: 0;
    }

    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background: #F7F8F9;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #53B443;
      border-radius: 6px;
      border: 3px solid #53B443;
    }

    scrollbar-width: thin;
    scrollbar-color: #53B443 #F7F8F9;
  }

  .successModal {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    box-sizing: border-box;
    position: absolute;
    overflow: visible;
    outline: none;

    @media screen and (max-width: 768px) {
      top: 0;
      transform: translateY(0);
      bottom: 0;
    }
  }

  .map-container {
    width: 100%;
    height: 100%;

    .ymaps-2-1-77-copyrights-pane {
      inset: auto 0px 10px !important;
    }
  }
`;

export default GlobalStyle;
