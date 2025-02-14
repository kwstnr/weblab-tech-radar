import { gql } from '@apollo/client/core';

export const TECHNOLOGIES_OF_CATEGORY = gql`
  query TechnologiesOfCategory($category: TechnologyCategory) {
    technologies(category: $category) {
      __typename
      id
      circle
      status
    }
  }
`;
