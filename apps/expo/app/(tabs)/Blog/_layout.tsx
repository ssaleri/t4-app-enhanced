import { Stack, Tabs } from 'expo-router';
import { View, SafeAreaView } from "react-native";
import { HomeScreen } from "app/features/home/screen";

export default function Layout() {
  return (
      <Stack screenOptions={{headerShown: false, title: "Blog"}}>
        <Stack.Screen name={"Blog"} />
      </Stack>
  )
}
