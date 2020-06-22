import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useStore } from '../lib/redux';
import { useApollo } from '../lib/apollo';

const GlobalStyle = createGlobalStyle`
  body {
    color: #201F2A;
    font-family: 'TT Norms', 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
    color: #201F2A;
    font-weight: 500;
  }

  p {
    margin: 0;
  }

  button {
    border: none;
    background-color: transparent;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
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
