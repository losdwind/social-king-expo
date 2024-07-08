import { Link, Stack, usePathname, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function NotFoundScreen() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text>This screen doesn't exist. {pathname}</Text>

        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
