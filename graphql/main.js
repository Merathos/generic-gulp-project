import gql from 'graphql-tag';

export const GET_QUOTES = gql`
  query getQuotes {
    quotes {
      id
      name
      content
      color
      image {
        id
        path {
          normal
          retina
        }
      }
    }
  }
`;
