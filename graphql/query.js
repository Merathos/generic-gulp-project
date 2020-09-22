import gql from 'graphql-tag';

export const GET_VACANCIES = gql`
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

export const GET_BLOG_CONTENT = gql`
  query getBlogContent {
    blogs(slug: "svoboda-vybirat") {
      slug
      title
      created_at
      audio
      content
      description
      summary
      type
      detail {
        path(width: 300) {
          normal
        }
      }
    }
  }
`;

export const GET_BLOG_LIST = gql`
  query getBlogList {
    blogs {
      slug
      title
      created_at
      summary
      type
      preview {
        path(width: 300) {
          normal
        }
      }
      category {
        name
      }
    }
  }
`;
