import gql from 'graphql-tag';

export const GET_VACANCIES = gql`
  query getVacancies(
    $search: String
    $teams: [String]
    $categories: [String]
    $stacks: [String]
    $internship: Boolean
    $english: Boolean
    $limit: Int
  ) {
    vacancies(
      filter: {
        search: $search
        categories: $categories
        teams: $teams
        stacks: $stacks
        is_internship: $internship
        is_english_speaking_team: $english
      }
      limit: $limit
    ) {
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
  query getVacancyContent($slug: String, $is_preview: Boolean) {
    vacancies(slug: $slug, is_preview: $is_preview) {
      id
      name
      is_english_speaking_team
      is_internship
      is_relocation
      descr
      slug
      content
      category {
        id
        image {
          path {
            normal
            retina
          }
        }
      }
      team {
        name
        slug
      }
      technology_stacks
      recruiters {
        name
        email
        telegram
        image {
          path {
            normal
            retina
          }
        }
      }
      related {
        id
        name
        slug
        descr
        is_english_speaking_team
        is_internship
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
          retina
        }
      }
      slug
      title
      created_at
    }
  }
`;

export const GET_BLOG_CONTENT = gql`
  query getBlogContent($slug: String, $is_preview: Boolean) {
    blogs(slug: $slug, is_preview: $is_preview) {
      type
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
          retina
        }
      }
      related {
        preview {
          path {
            normal
            retina
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
          retina
        }
      }
      preview {
        path(width: 350) {
          normal
          retina
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
          retina
        }
      }
      summary
    }
  }
`;

export const GET_TEAM_CONTENT = gql`
  query getTeamContent($slug: String, $is_preview: Boolean) {
    teams(slug: $slug, is_preview: $is_preview) {
      content
      description
      id
      name
      slug
      detail_image {
        path(width: 500) {
          normal
          retina
        }
      }
      technology_stacks
    }
  }
`;
