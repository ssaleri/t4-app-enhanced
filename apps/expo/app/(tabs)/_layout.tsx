import { Tabs } from "expo-router/tabs";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Button, useTheme } from '@t4/ui'
import { useLink } from 'solito/link';
import { useSheetOpen } from "app/atoms/sheet";
import React, { useState } from "react";
import { Sheet, View } from "@t4/ui/src";
import { ChevronDown } from "@tamagui/lucide-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const theme = useTheme()
  const backgroundColor = theme.color.val;
  const insets = useSafeAreaInsets()
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  return (
    <>
      <SafeAreaView style={stylesWithInsets(insets).safeAreaView}>
      <Tabs title={"home"} screenOptions={{
        headerShown: false,
        tabBarStyle: {
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
    </>
  )
}

const stylesWithInsets = (insets) => StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 10,
    elevation: 0,
    borderRadius: 16,
    paddingBottom: 0,
    minHeight: 64,
    //marginBottom: insets.bottom,
  },
  safeAreaView: {
    flex: 1,
    marginTop: -insets.top,
  },
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
