import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://api.develop.dins.d.nimax.ru/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // fetchOptions: {
      //   mode: 'no-cors',
      // },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Event: {
          fields: {
            future_content: {
              read(content) {
                return content.replace(/&nbsp;/g, '\u00A0');
              },
            },
            previous_content: {
              read(content) {
                return content.replace(/&nbsp;/g, '\u00A0');
              },
            },
            name: {
              read(name = '') {
                return name.replace(/\\n/g, '<br />');
              },
            },
          },
        },
        Blog: {
          fields: {
            content: {
              read(content) {
                return content.replace(/&nbsp;/g, '\u00A0');
              },
            },
            title: {
              read(title = '') {
                return title.replace(/\\n/g, '<br />');
              },
            },
          },
        },
        Vacancy: {
          fields: {
            content: {
              read(content) {
                return content.replace(/&nbsp;/g, '\u00A0');
              },
            },
            name: {
              read(name = '') {
                return name.replace(/\\n/g, '<br />');
              },
            },
          },
        },
        Team: {
          fields: {
            content: {
              read(content) {
                return content.replace(/&nbsp;/g, '\u00A0');
              },
            },
            name: {
              read(name = '') {
                return name.replace(/\\n/g, '<br />');
              },
            },
          },
        },
      },
    }),
    connectToDevTools: true,
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
