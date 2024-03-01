import { ScrollView, useWindowDimensions, YStack, useMedia } from '@t4/ui'
import React from 'react'
import { FlatList } from 'react-native'
import Section from "@t4/ui/src/components/organisms/Section/Section";
import Project from "@t4/ui/src/components/organisms/Project/Project";
import {XStack } from '@t4/ui/';
import { useDeviceMedia } from "app/hooks/useDeviceMedia";

const experiences = {
  "projects": [
    {
      "id": "5",
      "name": "B*******",
      "position": "Mobile Software Engineer",
      "startYear": "2023",
      "endYear": "current",
      "description": "I worked as a software engineer at B*******. I was responsible for developing mobile applications for iOS and WatchOS.",
      "shortDescription": "Luxury Watch Faces for Apple Watch"
    },
    {
      "id": "4",
      "name": "S*********",
      "position": "Mobile Software Engineer",
      "startYear": "2023",
      "endYear": "current",
      "description": "I worked as a software engineer at S*********. I was responsible for developing mobile applications for iOS and WatchOS.",
      "shortDescription": "Power Management reports on Android tablets"
    },
    {
      "id": "3",
      "name": "D**********",
      "position": "Mobile Software Engineer",
      "startYear": "2021",
      "endYear": "2023",
      "description": "I worked as a software engineer at D**********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Ho.Re.Ca Supply Delivery app for iOS and Android"
    },
    {
      "id": "2",
      "name": "S*********",
      "position": "Mobile Software Engineer",
      "startYear": "2019",
      "endYear": "2020",
      "description": "I worked as a software engineer at S*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Micromobility gamification app for iOS and Android"
    },
    {
      "id": "1",
      "name": "W*********",
      "position": "Full-stack Web Engineer",
      "startYear": "2017",
      "endYear": "2018",
      "description": "I worked as a software engineer at W*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Smart Working Management platform for Web"
    },
  ]
}

export const PortfolioScreen = () => {
  const {isMobile} = useDeviceMedia();

  return (
        <ScrollView>
          <Section>
            <Section.Title>Portfolio</Section.Title>
            <Section.Description>Major projects I have been involved in</Section.Description>
            <Section.Body>
              <FlatList
                data={experiences.projects}
                renderItem={({item}) => <Project project={item}/>}
                keyExtractor={(item) => item.name}
                ItemSeparatorComponent={<XStack mt={"$2"} />}
              />
            </Section.Body>
          </Section>
        </ScrollView>
  )
}
