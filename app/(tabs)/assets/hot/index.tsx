import { View, Text } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Button } from "~/components/ui/button";
import { Link, Stack } from "expo-router";
import { usePosts } from "~/hooks/usePosts";
import { Creates } from "~/hooks/usePosts";
import { IterationCcw } from "lucide-react-native";
import { hexToString } from 'viem';
import { WebView } from 'react-native-webview';
import TwitterPreview from 'react-native-twitter-preview';
import TwitterEmbed from "~/components/TwitterEmbed";

const ListItem = ({ item, index }: { item: Creates; index: number }) => {
  return (
    <View key={item.id} className="flex-1 p-4 border-b border-gray-200">
      <Link href={{ pathname: "/(tabs)/assets/hot/[id]", params: { id: item.arTxId } }} asChild>
        <View className="break-words">
          <Text>{hexToString(item.arTxId as `0x{string}`)}</Text>
          {/* <WebView source={{ uri: hexToString(item.arTxId as `0x{string}`) }} /> */}
          {/* <WebView source={{ uri: `https://x.com/DrKristieLeong/status/1811367340010803528` }} />
          <TwitterPreview
            url={`https://x.com/DrKristieLeong/status/1811367340010803528`}
            backgroundColor={'#272A35'}
          /> */}
          <TwitterEmbed tweetUrl={`https://x.com/DrKristieLeong/status/1811367340010803528`} />
        </View>
      </Link>
      <View className="flex-row">
        <Button variant="outline" size="sm" onPress={{}}>buy</Button>
        <Button variant="outline" size="sm">sell</Button>
        <View>
          <Text>price: $0.01</Text>
        </View>
      </View>
    </View>
  );
};

export default function HotList() {

  const { data, error, isLoading, isError } = usePosts(1, 3);
  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>{error.message}</Text>;

  return <FlashList renderItem={ListItem} data={data} keyExtractor={(item) => item.arTxId} />;
}
