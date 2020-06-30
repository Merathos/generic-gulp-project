import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../lib/redux';
import { useApollo } from '../lib/apollo';

import '../styles/emoji.min.css';
import '../styles/fonts.css';
import '../styles/reset.css';

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
