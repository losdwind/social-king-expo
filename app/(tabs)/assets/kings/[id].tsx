import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'

export default function KingDetail() {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>King Detail: {id}</Text>
    </View>
  )
}