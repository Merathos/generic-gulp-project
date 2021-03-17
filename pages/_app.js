import { Provider } from 'react-redux';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import useScrollRestoration from 'helpers/useScrollRestoration';
import GlobalStyle from 'styles/globalStyle';
import { useStore } from '../lib/store';
import { useApollo } from '../lib/apollo';

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);
  useScrollRestoration(router);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>DINS</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ApolloProvider>
    </Provider>
  );
}
