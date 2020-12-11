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
        category {
          slug
        }
      }
    }
  }
`;

export const GET_TEAMS_MAIN = gql`
  query getTeams($is_home: Boolean) {
    teams(is_home: $is_home) {
      id
      name
      description
      slug
      image {
        id
        path(width: 350) {
          normal
          retina
        }
      }
    }
  }
`;
