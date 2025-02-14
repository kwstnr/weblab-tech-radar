import { gql } from '@apollo/client/core';

export const DELETE_TECHNOLOGY = gql`
  mutation DeleteTechnology($input: DeleteTechnologyInput) {
    deleteTechnology(input: $input) {
      successful
    }
  }
`
