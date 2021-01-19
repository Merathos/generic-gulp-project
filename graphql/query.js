import gql from 'graphql-tag';

export const GET_RELOCATION_BLOGS = gql`
  query getRelocationBlogs {
    blogs(is_relocation: true) {
      id
      title
      slug
      type
      created_at
      preview {
        path(width: 210) {
          normal
          retina
        }
      }
    }
  }
`;

export const GET_BLOG_CONTENT = gql`
  query getBlogContent($slug: String, $is_preview: Boolean) {
    blogs(slug: $slug, is_preview: $is_preview) {
      title_new_line @client
      id
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
        id
        type
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
      name_new_line @client
      id
      name
      content
      description
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
