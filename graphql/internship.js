import { gql } from '@apollo/client';

export const GET_INTERNSHIP_CATEGORIES = gql`
  query getInternshipCategories {
    internship_categories {
      id
      name
      slug
    }
  }
`;
