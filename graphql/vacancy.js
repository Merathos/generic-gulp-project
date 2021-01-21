import { gql } from '@apollo/client';

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
      technology_stacks
      is_archive
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
      conditions {
        id
        text
        image {
          id
          path {
            normal
            retina
          }
        }
      }
      stages {
        id
        title
        description
        duration
      }
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

export const GET_VACANCY_CATEGORIES = gql`
  query getVacancyCategories {
    vacancy_categories {
      id
      name
      slug
    }
  }
`;

export const GET_VACANCY_STACKS = gql`
  query getVacancyStacks {
    vacancy_stacks {
      id
      name
      slug
    }
  }
`;

export const GET_VACANCY_TEAMS = gql`
  query getVacancyTeams {
    vacancy_teams {
      id
      name
      slug
    }
  }
`;
