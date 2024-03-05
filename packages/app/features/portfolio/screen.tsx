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

const iconColor = "#484848";
const iconDimension = 24;
const iconDimensionBig = 32;
const iconDimensionLittle = 16;

const experiences = {
  "projects": [
    {
      "id": "5",
      "name": "B*******",
      "role": "Mobile Software Engineer",
      "startYear": "2023",
      "endYear": "current",
      "description": "I worked as a software engineer at B*******. I was responsible for developing mobile applications for iOS and WatchOS.",
      "shortDescription": "Luxury Watch Faces",
      "technologies": <>
        <MaterialCommunityIcons name="react" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name={"language-typescript"} size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name="language-swift" size={iconDimension} color={iconColor}/>
      </>
    },
    {
      "id": "4",
      "name": "S*********",
      "role": "Mobile Software Engineer",
      "startYear": "2023",
      "endYear": "current",
      "description": "I worked as a software engineer at S*********. I was responsible for developing mobile applications for iOS and WatchOS.",
      "shortDescription": "Electrical Maintenance",
      "technologies": <>
        <MaterialCommunityIcons name="react" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name={"language-typescript"} size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name="android" size={iconDimension} color={iconColor} />
      </>
    },
    {
      "id": "3",
      "name": "D**********",
      "role": "Mobile Software Engineer",
      "startYear": "2021",
      "endYear": "2023",
      "description": "I worked as a software engineer at D**********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Ho.Re.Ca. Supply Delivery",
      "technologies": <>
        <MaterialCommunityIcons name="react" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name={"language-typescript"} size={iconDimension} color={iconColor}/>
        <Fontisto name="redux" size={iconDimensionLittle} color={iconColor}/>
      </>
    },
    {
      "id": "2",
      "name": "S*********",
      "role": "Mobile Software Engineer",
      "startYear": "2019",
      "endYear": "2020",
      "description": "I worked as a software engineer at S*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Micro-mobility Gamification",
      "technologies": <>
        <MaterialCommunityIcons name="react" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name="language-javascript" size={iconDimension} color={iconColor} />
        <MaterialCommunityIcons name="language-ruby-on-rails" size={iconDimension} color={iconColor} />
      </>
    },
    {
      "id": "1",
      "name": "W*********",
      "role": "Full-stack Web Engineer",
      "startYear": "2017",
      "endYear": "2018",
      "description": "I worked as a software engineer at W*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Remote Work Social Platform",
      "technologies": <>
        <MaterialCommunityIcons name="bootstrap" size={iconDimension} color={iconColor} />
        <MaterialCommunityIcons name="language-javascript" size={iconDimension} color={iconColor} />
        <MaterialCommunityIcons name="language-ruby-on-rails" size={iconDimension} color={iconColor} />

      </>
    },
  ]
}

export const PortfolioScreen = () => {
  return (
    <>
      <CoverList
        title={"Portfolio"}
        description={"Projects I have been involved in"}
        data={experiences.projects}
        renderItem={({item}) => <Project project={item}/>}
      />
    </>
  )
}
