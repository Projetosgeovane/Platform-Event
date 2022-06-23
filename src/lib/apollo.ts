import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q64dxj31s301xsd3c47bcb/master',
    cache: new InMemoryCache()
})