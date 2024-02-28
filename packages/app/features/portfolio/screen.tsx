import { ScrollView, useWindowDimensions, YStack } from '@t4/ui'
import React from 'react'
import { FlatList } from 'react-native'
import Section from "@t4/ui/src/components/organisms/Section/Section";
import Project from "@t4/ui/src/components/organisms/Project/Project";

const experiences = {
  "projects": [
    {
      "name": "B*******",
      "position": "Mobile Software Engineer",
      "startYear": "2023",
      "endYear": "current",
      "description": "I worked as a software engineer at B*******. I was responsible for developing mobile applications for iOS and WatchOS.",
      "shortDescription": "Luxury Watch Faces for Apple Watch"
    },
    {
      "name": "S*********",
      "position": "Mobile Software Engineer",
      "startYear": "2023",
      "endYear": "current",
      "description": "I worked as a software engineer at S*********. I was responsible for developing mobile applications for iOS and WatchOS.",
      "shortDescription": "Power Management reports on Android tablets"
    },
    {
      "name": "D**********",
      "position": "Mobile Software Engineer",
      "startYear": "2021",
      "endYear": "2023",
      "description": "I worked as a software engineer at D**********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Ho.Re.Ca Supply Delivery app for iOS and Android"
    },
    {
      "name": "S*********",
      "position": "Mobile Software Engineer",
      "startYear": "2019",
      "endYear": "2020",
      "description": "I worked as a software engineer at S*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Micromobility gamification app for iOS and Android"
    },
    {
      "name": "W*********",
      "position": "Full-stack Web Engineer",
      "startYear": "2017",
      "endYear": "2018",
      "description": "I worked as a software engineer at W*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.",
      "shortDescription": "Smart Working Management platform for Web"
    },
  ]
}

export function PortfolioScreen() {
  const windowWidth = useWindowDimensions().width;
  const handleNumColumns = windowWidth > 1200 ? 3 : 1;

  return (
    <ScrollView>
      <YStack flex={1} jc='center' ai='center' px='$4' pt={"$6"}>
        <Section>
          <Section.Title>Portfolio</Section.Title>
          <Section.Description>Major projects I have been involved in</Section.Description>
          <Section.Body>
            <FlatList
              key={handleNumColumns}
              data={experiences.projects}
              renderItem={({item}) => <Project project={item} numColumns={handleNumColumns}/>}
              keyExtractor={(item) => item.name}
              numColumns={handleNumColumns}
            />
          </Section.Body>
        </Section>
      </YStack>
    </ScrollView>
  )
}
