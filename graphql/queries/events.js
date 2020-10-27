import gql from 'graphql-tag';

export const GET_EVENT_CATEGORIES = gql`
  query getEventCategories {
    event_categories {
      id
      name
      slug
      color
    }
  }
`;
export const GET_EVENTS = gql`
  query getEvents(
    $slug: String
    $limit: Int = 4
    $offset: Int = 0
    $categories: [String]
  ) {
    events(
      slug: $slug
      limit: $limit
      offset: $offset
      categories: $categories
    ) {
      id
      name
      slug
      is_open_broadcast
      has_video
      starts_at
      ends_at
      location
      category {
        id
        name
        slug
        color
      }
      status {
        id
        name
        slug
      }
      programs {
        id
        speaker {
          id
          name
          company
          image {
            id
            path {
              normal
              retina
            }
          }
        }
        description
        name
        time_at
      }
      broadcast_link
    }
  }
`;
