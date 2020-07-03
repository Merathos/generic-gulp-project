import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from 'lib/apollo-client';

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
    width: 100%;
    text-align: left;
    cursor: pointer;
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

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp);
