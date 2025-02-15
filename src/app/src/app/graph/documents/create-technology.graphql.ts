import { gql } from '@apollo/client/core';

export const CREATE_TECHNOLOGY = gql`
  mutation CreateTechnology($input: CreateTechnologyInput) {
    createTechnology(input: $input) {
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
