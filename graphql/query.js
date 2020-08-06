import gql from 'graphql-tag';

export const GET_CONTENT = gql`
  query getVacancies {
    vacancies {
      name
    }
  }
`;
