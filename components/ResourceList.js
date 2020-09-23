import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';
import store from 'store-js';

const GET_PRODUCTS_BY_ID = gql`
query getProducts($ids: [ID!]!){
    nodes(ids: $ids){
      ... on Product{
        title
        handle
        id
      }
    }
  }`;
