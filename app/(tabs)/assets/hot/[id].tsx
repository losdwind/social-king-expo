import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import WebView from 'react-native-webview';
import TwitterEmbed from '~/components/TwitterEmbed';
import { hexToString } from 'viem';
export default function SocialEmbed() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      {/* <View> */}
      {/* <Text>{hexToString(id as `0x{string}`)}</Text> */}
      {/* <TwitterEmbed tweetUrl={`https://x.com/DrKristieLeong/status/1811367340010803528`} /> */}
      {/* </View> */}
      <Text>{id}</Text>
    </View>
  )
}