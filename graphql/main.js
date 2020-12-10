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

export const GET_BANNER = gql`
  query getBanner {
    banner {
      id
      type
      text
      link
      button_text
      event {
        id
        name
        slug
        starts_at
        ends_at
      }
    }
  }
`;
