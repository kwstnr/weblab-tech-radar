import { gql } from '@apollo/client/core';

export const ME = gql`
  query Me {
    me {
      name
      email
      role
    }
  }
`;
