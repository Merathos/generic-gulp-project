import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { useStore } from '../lib/store';
import { useApollo } from '../lib/apollo';

const GlobalStyle = createGlobalStyle`
  body {
    color: #201F2A;
    font-family: 'TT Norms', 'Arial', sans-serif;
    font-weight: 500;
    overflow-x: hidden;
    font-variant-ligatures: none;
  }

  a {
    text-decoration: none;
    color: #201F2A;
    font-weight: 500;
    display: block;
    cursor: pointer;
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
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-container {
    overflow: hidden;
  }
`;

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </Provider>
  );
}
