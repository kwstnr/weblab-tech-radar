import { gql } from '@apollo/client/core';

export const TECHNOLOGIES_OF_CATEGORY = gql`
  query TechnologiesOfCategory($category: Category) {
    technologies(category: $category) {
      __typename
      id
      name
      status
      circle
    }
  }
`;
