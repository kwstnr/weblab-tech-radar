import { gql } from '@apollo/client/core';

export const TECHNOLOGIES = gql`
  query Technologies {
    technologies {
      id
      name
      category
      status
    }
  }
`;
