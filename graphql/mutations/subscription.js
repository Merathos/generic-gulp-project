import gql from 'graphql-tag';

export const SET_SUBSCRIPTION = gql`
  mutation Subscription(
    $name: String!
    $lastname: String!
    $email: String!
    $is_consent_pd: Boolean
    $is_consent_newsletter: Boolean
  ) {
    Subscription(
      name: $name
      lastname: $lastname
      email: $email
      is_consent_pd: $is_consent_pd
      is_consent_newsletter: $is_consent_newsletter
    )
  }
`;
