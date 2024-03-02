import { Tabs } from "expo-router/tabs";

export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="Blog"
      />
      <Tabs.Screen
        name="About"
      />
      <Tabs.Screen
        name="Portfolio"
      />
    </Tabs>
  )
}
