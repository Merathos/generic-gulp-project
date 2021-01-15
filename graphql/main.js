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
        path(width: 792) {
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
      image {
        id
        path(width: 500) {
          normal
          retina
        }
      }
      event {
        id
        name
        slug
        starts_at
        ends_at
        has_video
        category {
          slug
        }
      }
    }
  }
`;

export const GET_BLOGS_MAIN = gql`
  query getBlogsMain($is_home: Boolean) {
    blogs(is_home: $is_home) {
      id
      type
      title
      summary
      description
      slug
      detail {
        id
        path {
          normal
          retina
        }
      }
      type
      audio
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

export const GET_VACANCY_CATEGORIES_MAIN = gql`
  query getVacancyCategories {
    vacancy_categories {
      id
      name
      slug
      vacancy_count
    }
  }
`;
