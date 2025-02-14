import { gql } from '@apollo/client/core';

export const TECHNOLOGY = gql`
  query Technology($id: String) {
    technologyById(id: $id) {
      __typename
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
