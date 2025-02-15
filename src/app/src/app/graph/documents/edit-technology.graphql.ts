import { gql } from '@apollo/client/core';

export const EDIT_TECHNOLOGY = gql`
  mutation EditTechnology($input: EditTechnologyInput) {
    editTechnology(input: $input) {
      id
      name
      description
      category
      circle
      circleDescription
      status
      created
      published
      changed
    }
  }
`
