import { gql } from '@apollo/client/core';

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      successful
      jwtToken
    }
  }
`;
