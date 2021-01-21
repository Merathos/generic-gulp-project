import { gql } from '@apollo/client';

export const GET_BLOGS_CATEGORIES = gql`
  query getBlogsCategories {
    blog_categories {
      id
      name
      slug
    }
  }
`;

export const GET_BLOGS_LIST = gql`
  query getBlogsList($categories: [String], $limit: Int, $offset: Int) {
    blogs(categories: $categories, limit: $limit, offset: $offset) {
      id
      type
      title
      summary
      created_at
      slug
      is_highlight
      category {
        name
      }
      preview {
        id
        path(width: 350) {
          normal
          retina
          original
        }
      }
      highlight_image {
        id
        path(width: 774) {
          normal
          retina
        }
      }
    }
  }
`;
