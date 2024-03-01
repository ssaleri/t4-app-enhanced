import { UpsScreen } from 'app/features/ups/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Ups',
        }}
      />
      <UpsScreen />
    </>
  )
}
