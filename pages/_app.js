import { createGlobalStyle } from 'styled-components';

import '../styles/emoji.min.css';
import '../styles/fonts.css';
import '../styles/reset.css';

const Layout = ({ children }) => <div className="layout">{children}</div>

const GlobalStyle = createGlobalStyle`
  body {
    color: #201F2A;
    font-family: 'TT Norms', 'Arial', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: #201F2A;
    font-weight: 500;
    display: block;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 800;
  }

  img, video {
    width: 100%;
    height: auto;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-container {
    overflow: hidden;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  );
}
