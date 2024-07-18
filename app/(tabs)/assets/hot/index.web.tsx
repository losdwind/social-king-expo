import { View, Text, Dimensions } from "react-native";
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
import { Tweet } from "rn-tweet-embed";
import { XEmbed } from 'react-social-media-embed';
const ListItem = ({ item, index }: { item: Creates; index: number }) => {
  return (
    <View key={item.id} className="flex-1 p-4 ">
      {/* border-b border-gray-200 */}
      <Link href={{ pathname: "/(tabs)/assets/hot/[id]", params: { id: item.arTxId } }} asChild>
        <View className="break-words">
          {/* <Text className="break-words">{hexToString(item.arTxId as `0x{string}`)}</Text> */}
          {/* <WebView source={{ uri: hexToString(item.arTxId as `0x{string}`) }} /> */}
          {/* <WebView source={{ uri: `https://x.com/DrKristieLeong/status/1811367340010803528` }} /> */}
          {/* <TwitterPreview
            url={`https://x.com/DrKristieLeong/status/1811367340010803528`} /> */}
          {/* <TwitterEmbed tweetUrl={hexToString(item.arTxId as `0x{string}`)} /> */}
          {/* <Tweet tweetUrl={hexToString(item.arTxId as `0x{string}`)} /> */}
          <XEmbed url={hexToString(item.arTxId as `0x{string}`)} />
        </View>
      </Link>
      <View className="flex-row justify-start py-4 gap-4 ">
        <Button variant="default" size="sm" onPress={() => { }}><Text className="text-white">Buy</Text></Button>
        <Button variant="default" size="sm"><Text className="text-white">Sell</Text></Button>
        <View className="justify-center">
          <Text>price: $0.01</Text>
        </View>
      </View>
    </View>
  );
};

export default function HotList() {

  const { data, error, isLoading, isError } = usePosts(1, 10);
  const screenWidth = Dimensions.get('window').width;
  const numColumns = Math.floor(screenWidth / 500); // Adjust the threshold as needed


  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>{error.message}</Text>;

  return (
    <View className="flex-1 p-4">
      <FlashList renderItem={ListItem} data={data} keyExtractor={(item) => item.arTxId} numColumns={numColumns} />
    </View>
  );
}
