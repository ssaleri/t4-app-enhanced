import { Stack, Tabs } from 'expo-router'
import { View } from 'react-native'
import { HomeScreen } from 'app/features/home/screen'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'About'} />
    </Stack>
  )
}
