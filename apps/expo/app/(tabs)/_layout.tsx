import { Tabs } from "expo-router/tabs";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { StyleSheet } from 'react-native';
import { Button, useTheme } from '@t4/ui'
import { useLink } from 'solito/link';
import { useSheetOpen } from "app/atoms/sheet";
import React, { useState } from "react";
import { Sheet } from "@t4/ui/src";
import { ChevronDown } from "@tamagui/lucide-icons";
import { SafeAreaView } from '@t4/ui/src/components/templates/SafeAreaView/SafeAreaView';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const theme = useTheme()
  console.log(theme)

  const backgroundColor = theme.color.val;
  const insets = useSafeAreaInsets()

  const sendMessageLink = useLink(
    {
      href: "/sendMessage"
    }
  )

  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  return (
    <SafeAreaView>
      <Tabs screenOptions={{
        headerShown: false, tabBarStyle: {
          backgroundColor: backgroundColor,
          ...stylesWithInsets(insets).tabBar,
          ...styles.shadow
        }
      }}>
        <Tabs.Screen
          name="Blog"
          options={{
            ...options,
            tabBarIcon: ({color, size}) => (
              <SimpleLineIcons name="feed" size={size} color={color}/>
            ),
          }}
        />
        <Tabs.Screen
          name="About"
          options={{
            ...options,
            tabBarIcon: ({color, size}) => (
              <SimpleLineIcons name="user" size={size} color={color}/>
            ),
          }}
        />
        <Tabs.Screen
          name="HireMe"
          options={{
            ...options,
            tabBarButton: ({onPress}) => (
              <Button onPress={() => setOpen((x) => !x)} size="$3" backgroundColor={theme.green9} top={-24}
                      borderRadius={32} height={64} width={64} theme="active">
                <SimpleLineIcons name={"paper-plane"} size={32} color={theme.color1.val}/>
              </Button>
            ),
          }}
        />
        <Tabs.Screen
          name="Portfolio"
          options={{
            ...options,
            tabBarIcon: ({color, size}) => (
              <SimpleLineIcons name="briefcase" size={size} color={color}/>
            ),
          }}
        />
        <Tabs.Screen
          name="Protected"
          options={{
            ...options,
            tabBarIcon: ({color, size}) => (
              <SimpleLineIcons name="lock" size={size} color={color}/>
            ),
          }}
        />
      </Tabs>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay/>
        <Sheet.Frame alignItems='center' justifyContent='center'>
          <Sheet.Handle/>
          <Button
            size='$6'
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </SafeAreaView>
  )
}

const stylesWithInsets = (insets) => StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 16,
    right: 16,
    elevation: 0,
    borderRadius: 16,
    paddingBottom: 0,
    minHeight: 64,
  }
});

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    paddingTop: 0,
  },
  tabBarLabelStyle: {
    paddingBottom: 16,
  }
});

const options = {
  tabBarItemStyle: styles.tab,
  tabBarLabelStyle: styles.tabBarLabelStyle,
};
