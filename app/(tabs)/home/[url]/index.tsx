import { View, Text } from 'react-native'
import React from 'react'
import { usePathname } from 'expo-router'

export default function SocialEmbed() {
    const url = usePathname()
  return (
    <View>
      <Text>{url}</Text>
    </View>
  )
}