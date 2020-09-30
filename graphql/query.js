import gql from 'graphql-tag';

export const GET_VACANCIES = gql`
  query getVacancies {
    vacancies(limit: 10) {
      name
      is_english_speaking_team
      is_internship
      is_relocation
      descr
      slug
    }
  }
`;

export const GET_VACANCY_CONTENT = gql`
  query getVacancyContent($slug: String) {
    vacancies(slug: $slug) {
      name
      is_english_speaking_team
      is_internship
      is_relocation
      descr
      slug
    	content
    	category {
    	  id
    	}
    	project {
    	  name
    	}
    	stacks {
        name
      }
    	recruiters {
        name
      }
    }
  }
`;

export const GET_RELOCATION_BLOGS = gql`
  query getRelocationBlogs {
    blogs(is_relocation: true) {
      preview {
        path {
          normal
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
  query getBlogContent($slug: String) {
    blogs(slug: $slug) {
      slug
      title
      created_at
      audio
      content
      description
      summary
      type
      detail {
        path {
          normal
        }
      }
      related {
        preview {
          path {
            normal
          }
        }
        slug
        title
        created_at
      }
      detail_mobile {
        path(width: 300) {
          normal
        }
      }
    }
  }
`;

export const GET_BLOG_CATEGORIES = gql`
  query getBlogCategories($categories: [String]) {
    blogs(categories: $categories) {
      slug
      title
      created_at
      summary
      type
      is_highlight
      highlight_image {
        path {
          normal
        }
      }
      preview {
        path(width: 350) {
          normal
        }
      }
      category {
        name
      }
    }
  }
`;

export const GET_TEAM_CATEGORIES = gql`
  query getTeamCategories($stack: [String]) {
    teams(stacks: $stack) {
      slug
      name
      image {
        path(width: 350) {
          normal
        }
      }
      summary
    }
  }
`;
