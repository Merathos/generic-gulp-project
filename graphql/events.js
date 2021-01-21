import { gql } from '@apollo/client';

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
    $limit: Int
    $offset: Int
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

export const SET_EVENTS_SUBSCRIPTION = gql`
  mutation Event(
    $name: String!
    $lastname: String!
    $email: String!
    $is_consent_pd: Boolean
    $is_consent_newsletter: Boolean
    $categories: [Int]
  ) {
    Event(
      name: $name
      lastname: $lastname
      email: $email
      is_consent_pd: $is_consent_pd
      is_consent_newsletter: $is_consent_newsletter
      categories: $categories
    )
  }
`;

export const GET_EVENT = gql`
  query getEvent($slug: String, $is_preview: Boolean, $hash: String) {
    events(slug: $slug, is_preview: $is_preview, hash: $hash) {
      id
      name
      slug
      has_video
      starts_at
      ends_at
      location
      future_content
      previous_content
      is_open_broadcast
      broadcast_link
      timepad_id
      has_video
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
      related {
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
  }
`;

export const GET_EVENT_POLLING = gql`
  query getEvent($slug: String, $is_preview: Boolean) {
    events(slug: $slug, is_preview: $is_preview) {
      id
      broadcast_link
      status {
        id
        name
        slug
      }
    }
  }
`;
