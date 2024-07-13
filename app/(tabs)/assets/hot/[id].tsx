import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'

export default function SocialEmbed() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Link href={{ pathname: "/(tabs)/assets/hot/[id]", params: { id: item.arTxId } }} asChild>
        <View>
          <Text>{hexToString(item.arTxId as `0x{string}`)}</Text>
        </View>
      </Link>
      <Text>{id}</Text>
    </View>
  )
}