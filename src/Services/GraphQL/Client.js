import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';


const Client = new ApolloClient({
  //uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  uri: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
  cache: new InMemoryCache()
});

export default Client;


export const GQL = gql;