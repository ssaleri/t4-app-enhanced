import { useWindowDimensions, YStack, useMedia } from '@t4/ui'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Section from "@t4/ui/src/components/organisms/Section/Section";
import Project from "@t4/ui/src/components/organisms/Project/Project";
import { XStack, ScrollView, Text } from '@t4/ui/';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Paragraph } from "tamagui";
import { CoverList } from "@t4/ui/src/components/templates/CoverList/CoverList";

export const PortfolioScreen = () => {
  return (
    <>
      <CoverList
        title={"Portfolio"}
        description={"Projects I have been involved in"}
        data={experiences.projects}
        renderItem={({item}) => <Project project={item}/>}
        colorFrom={"$green8"}
        colorTo={"$color3"}
      />
    </>
  )
}
