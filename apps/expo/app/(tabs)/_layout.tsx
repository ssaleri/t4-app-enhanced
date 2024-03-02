import { Tabs } from "expo-router/tabs";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Layout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="Blog"
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="feed" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Portfolio"
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="briefcase" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Protected"
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="lock" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
