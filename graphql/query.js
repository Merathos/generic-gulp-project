import gql from 'graphql-tag';

export const GET_CONTENT = gql`
  query getVacancies {
    vacancies {
      name
      descr
      is_english_speaking_team
    }
  }
`;
