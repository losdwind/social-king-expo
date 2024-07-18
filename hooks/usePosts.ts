import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

export function usePosts(limit: number = 15) {
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


  return useInfiniteQuery({
    queryKey: ['posts', limit], queryFn: async ({ pageParam = 1 }) => {
      const variables = {
        limit,
        skip: (pageParam - 1) * limit
      };
      const data = await request(endpoint, query, variables);
      return data.creates as Creates[];
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) {
        return undefined;
      }
      return allPages.length + 1;
    }
  });
}