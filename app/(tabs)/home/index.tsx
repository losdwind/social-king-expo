import { View, Text } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Button } from "~/components/ui/button";
import { Link } from "expo-router";
import { usePosts } from "~/hooks/usePosts";
import { Creates } from "~/hooks/usePosts";
const ListItem = ({ item, index }: { item: Creates; index: number }) => {
  return (
    <Link href={`/${item.arTxId}`} asChild>
      <Button>
        <View>
          <Text>{item.arTxId}</Text>
        </View>
      </Button>
    </Link>
  );
};

export default function SocialCardList() {
  const { data, error, isLoading, isError } = usePosts(1, 3);
  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>{error.message}</Text>;

  return <FlashList renderItem={ListItem} data={data} />;
}
