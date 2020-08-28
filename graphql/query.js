import gql from 'graphql-tag';

export const GET_CONTENT = gql`
  query getVacancies {
    vacancies(limit: 10) {
      name
      is_english_speaking_team
      is_internship
      is_relocation
      descr
    }
  }
`;

export const GET_RELOCATION_BLOGS = gql`
  query getRelocationBlogs {
    blogs(is_relocation: true) {
      preview {
        path {
          original
        }
      }
      slug
      title
      created_at
    }
  }
`;

export const GET_FILTER_SEARCH = gql`
  query getSearch($value: String) {
    vacancies(filter: { search: $value }) {
      id
    }
  }
`;
