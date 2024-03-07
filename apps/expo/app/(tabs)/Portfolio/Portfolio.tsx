import { FlatList } from "react-native";
import { H6 } from "tamagui";
import { XStack, YStack } from "@t4/ui/src";
import { CoverPage } from "@t4/ui/src/components/templates/CoverPage/CoverPage";
import React from "react";
import Project from "@t4/ui/src/components/organisms/Project/Project";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from 'react-native-vector-icons/Fontisto';

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
        <MaterialCommunityIcons name="android" size={iconDimension} color={iconColor}/>
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
        <MaterialCommunityIcons name="language-javascript" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name="language-ruby-on-rails" size={iconDimension} color={iconColor}/>
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
        <MaterialCommunityIcons name="bootstrap" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name="language-javascript" size={iconDimension} color={iconColor}/>
        <MaterialCommunityIcons name="language-ruby-on-rails" size={iconDimension} color={iconColor}/>

      </>
    },
  ]
}

export default function Page() {
  return (
    <CoverPage
      title={"Portfolio"}
      colorFrom={"$green8"}
      colorTo={"$color3"}
    >{(onScroll, styles) => (
      <FlatList
        onScroll={onScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={<H6 textAlign={"center"} py={"$6"}>Tech news</H6>}
        ListFooterComponent={<YStack height={"$12"}/>}
        contentContainerStyle={styles}
        data={experiences.projects}
        renderItem={({item}) => <Project project={item}/>}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<XStack mt={"$4"}/>}
      />
    )}
    </CoverPage>
  )
}
