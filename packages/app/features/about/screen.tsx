import { Avatar, Circle, Paragraph, Separator, Square, Text, View, XStack, YStack } from '@t4/ui'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from "tamagui";
import Section from "@t4/ui/src/components/organisms/Section/Section";
import { Dimensions } from "react-native";
import { getTokenValue } from "@tamagui/core"

const profile = {
  "info": {
    "imageSrc": "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    "fullName": "Simone Saleri",
    "job": "Software developer",
    "location": "Milan, Italy",
    "shortDescription": "👋Hello! I'm a software engineer, passionate about crafting beautiful and functional apps."
  },
  "skills": [
    {name: "React Native", icon: "logo-react"},
    {name: "React", icon: "logo-react"},
    {name: "Next.js", icon: "logo-next"},
    {name: "Typescript", icon: "ts-icon"},
    {name: "Javascript", icon: "logo-javascript"},
    {name: "Git", icon: "git-icon"},
    {name: "Ruby on Rails", icon: "git-icon"},
  ],
  "experiences": [
    {
      what: "Mobile Developer (React Native, Swift)",
      where: "Bitbrand",
      location: "Remote (New York, NY)",
      fromDate: "2024",
      toDate: "2024",
      isOngoing: true,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Mobile Developer (React Native)",
      where: "Deliveristo",
      location: "Remote (Milan, Italy)",
      fromDate: "2021",
      toDate: "2023",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Mobile Developer (React Native)",
      where: "SaveBiking",
      location: "Remote (Milan, Italy)",
      fromDate: "2020",
      toDate: "2021",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Full Stack Developer (Ruby on Rails)",
      where: "WhiteLibra",
      location: "Remote (Milan, Italy)",
      fromDate: "2018",
      toDate: "2019",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
  ],
  "educations": [
    {
      what: "Continuous learning",
      where: "",
      location: "",
      fromDate: "2012",
      toDate: "2013",
      ongoing: true,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Master’s Degree - Computer Science",
      where: "University of Milan - Bicocca",
      location: "Milan (Italy)",
      fromDate: "2012",
      toDate: "2013",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Bachelor’s Degree - Computer Science",
      where: "University of Milan - Bicocca",
      location: "Milan (Italy)",
      fromDate: "2012",
      toDate: "2013",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Scientific PNI high school diploma",
      where: "Liceo G. Casiraghi",
      location: "Cinisello B., Milan (Italy)",
      fromDate: "2012",
      toDate: "2013",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
  ],
};

const Skill = ({name, icon}: { name: string, icon: string }) => {
  const theme = useTheme();
  const windowWidth = Dimensions.get('window').width
  const cardWidth = (windowWidth / 3) - getTokenValue("$8");
  const color = theme.color12.val;
console.log(color)
  return (
    <Square size={cardWidth} backgroundColor="$color6" elevation="$2" borderRadius={"$4"}>
      <YStack alignItems={"center"}>
        <Ionicons name={icon} size={40} color={color} />
        <Paragraph color={color}>
          {name}
        </Paragraph>
      </YStack>
    </Square>
  )
}

const circleRadius = 4;
const halfCircleRadius = circleRadius / 2;
const Experience = (experience: any) => (
  <XStack>
    <YStack paddingTop={"$2"} paddingHorizontal={"$6"}>
      <Circle marginLeft={-halfCircleRadius} marginBottom={circleRadius} size={circleRadius} backgroundColor="$color"/>
      <Separator alignSelf="stretch" vertical borderColor={"$gray8"} borderWidth={1}/>
    </YStack>
    <YStack paddingBottom={"$9"} flex={1} gap={"$1"}>
      {experience?.where && (<Text fontSize={"$6"} fontWeight={600}>
        {experience.where}
      </Text>)}

      {experience?.location && <Text fontSize={"$4"} color={"$gray11"} paddingTop={"$1"} paddingBottom={"$3"}>
        <Ionicons name={"location-outline"}
                  size={16}/>{experience.location}
      </Text>}

      {experience?.what && <Text fontSize={"$4"} fontWeight={600} fontFamily={""}>
        {experience?.what}
      </Text>}

      {experience?.shortDescription && <Text fontSize={"$4"}>
        {experience?.shortDescription}
      </Text>}


      {experience?.fromDate && (experience?.toDate || experience?.isOngoing) && <Paragraph>
        {experience.fromDate} - {experience?.isOngoing ? " Present" : experience.toDate}
      </Paragraph>}
    </YStack>
  </XStack>
)

export function AboutScreen() {
  const theme = useTheme();

  return (
    <>
      <YStack space={'$4'} paddingTop={"$4"} paddingBottom={200}>
        <YStack marginTop={-64} marginBottom={"$4"} alignItems={"center"}>
          <Avatar circular size={"$13"} style={{borderWidth: 4, borderColor: theme.background.val}}>
            <Avatar.Image
              accessibilityLabel="Cam"
              src={profile?.info?.imageSrc}
            />
            <Avatar.Fallback backgroundColor="$blue10"/>
          </Avatar>
          <YStack marginTop={"$4"} alignItems={"center"} space={"$2"}>
            <Paragraph fontSize={"$8"} fontWeight={700}>{profile?.info?.fullName}</Paragraph>
            <Paragraph fontSize={"$5"}>{profile?.info?.job}</Paragraph>
            <Paragraph fontSize={"$5"} color={"$gray10"}>
              <Ionicons name={"location-outline"} size={16}/>
              {profile?.info?.location}
            </Paragraph>
          </YStack>
        </YStack>
        <Paragraph fontSize={"$5"}>{profile?.info?.shortDescription}</Paragraph>

        <Section>
          <Section.Title paddingVertical={"$6"}>Skills</Section.Title>
          <Section.Body>
            <XStack flexWrap={"wrap"} gap={"$3"}>{profile.skills.map(skill => (
              <Skill key={skill.name} {...skill}/>))}</XStack></Section.Body>
        </Section>

        <Section>
          <Section.Title paddingVertical={"$6"}>Work Experience</Section.Title>
          <Section.Body>
            {profile.experiences.map(experience => (<Experience key={experience.what} {...experience}/>))}</Section.Body>
        </Section>

        <Section>
          <Section.Title paddingVertical={"$6"}>Education</Section.Title>
          <Section.Body>
            {profile.educations.map(education => (<Experience key={education.what}{...education} />))}</Section.Body>
        </Section>
      </YStack>
    </>
  )
}
