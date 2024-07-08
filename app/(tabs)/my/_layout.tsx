import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function MyLayout() {
  return (
    <Stack.Screen options={{headerShown:false}} />
  )
}