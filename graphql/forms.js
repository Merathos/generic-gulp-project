import gql from 'graphql-tag';

export const SET_FORM_VACANCY = gql`
  mutation Vacancy(
    $name: String!
    $lastname: String!
    $email: String!
    $phone: String!
    $is_consent_pd: Boolean
    $is_consent_newsletter: Boolean
    $communication_method: String
    $tg_login: String
    $resume_file: Upload
    $vacancy_id: Int
  ) {
    Vacancy(
      name: $name
      lastname: $lastname
      email: $email
      phone: $phone
      is_consent_pd: $is_consent_pd
      is_consent_newsletter: $is_consent_newsletter
      communication_method: $communication_method
      tg_login: $tg_login
      resume_file: $resume_file
      vacancy_id: $vacancy_id
    )
  }
`;

export const SET_FORM_SUBSCRIPTION = gql`
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

export const SET_FORM_INTERNSHIP = gql`
  mutation Internship(
    $name: String!
    $lastname: String!
    $email: String!
    $phone: String!
    $is_consent_pd: Boolean
    $is_consent_newsletter: Boolean
    $communication_method: String
    $tg_login: String
    $dob: String!
    $university: String!
    $faculty: String!
    $course: String!
    $technologies_like: String
    $technologies_use: String
    $start_month: String
    $hours: String
    $resume_file: Upload
    $categories: [Int]
  ) {
    Internship(
      name: $name
      lastname: $lastname
      email: $email
      phone: $phone
      is_consent_pd: $is_consent_pd
      is_consent_newsletter: $is_consent_newsletter
      communication_method: $communication_method
      tg_login: $tg_login
      dob: $dob
      university: $university
      faculty: $faculty
      course: $course
      technologies_like: $technologies_like
      technologies_use: $technologies_use
      start_month: $start_month
      hours: $hours
      resume_file: $resume_file
      categories: $categories
    )
  }
`;
