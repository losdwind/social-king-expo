import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request, gql } from "graphql-request";
// Define your types
export type Creates = {
  id: string;
  assetId: string;
  arTxId: string;
  sender: string;
  blockNumber: string;
  blockTimestamp: string;
};

export type Trades = {
  id: string;
  assetId: string;
  arTxId: string;
  sender: string;
  blockNumber: string;
  blockTimestamp: string;
  creatorFee: string;
  ethAmount: string;
  tokenAmount: string;
  tradeType: string;
};

// Function to fetch posts

export function usePosts(page: number = 1, limit: number = 15) {
  const endpoint = process.env.EXPO_PUBLIC_THE_GRAPH_ENDPOINT;
  if (!endpoint) {
    throw new Error("The Graph endpoint is not defined in environment variables");
  }

  const query = gql`
    query GetPosts($limit: Int!, $skip: Int!) {
      creates(first: $limit, skip: $skip, orderBy: blockTimestamp, orderDirection: desc) {
        id
        assetId
        sender
        arTxId
        blockNumber
        blockTimestamp
      }
    }
  `;

  const variables = {
    limit,
    skip: (page - 1) * limit
  };

  return useQuery({
    queryKey: ['posts', page, limit], queryFn: async () => {
      const data = await request(endpoint, query, variables);
      console.log("data ============", data)
      return data.creates as Creates[];
    }
  });
}