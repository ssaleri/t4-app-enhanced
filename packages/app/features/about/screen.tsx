import { Avatar, Circle,Paragraph, useToastController, XStack, YStack, Separator } from '@t4/ui'
import React from 'react'
import { useLink } from 'solito/link'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from "tamagui";
import Section from "@t4/ui/src/components/organisms/Section/Section";

const profile = {
  "info": {
    "imageSrc": "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    "fullName": "Simone Saleri",
    "job": "Software developer",
    "location": "Milan, Italy",
    "shortDescription": "👋Hello! I'm a software engineer, passionate about crafting beautiful and functional apps."
  },
  "skills": [
    {name: "React Native", icon: "react-native-icon"},
    {name: "React", icon: "react-icon"},
    {name: "Next.js", icon: "next-js-icon"},
    {name: "Typescript", icon: "ts-icon"},
    {name: "Javascript", icon: "js-icon"},
    {name: "Git", icon: "git-icon"},
    {name: "Git flow", icon: "git-icon"},
  ],
  "experiences": [
    {what: "Mobile Developer (React Native, Swift)", where: "Bitbrand", fromDate: "2012", toDate: "2013", isOngoing: true},
    {what: "Mobile Developer (React Native)", where: "Deliveristo", fromDate: "2012", toDate: "2013", isOngoing: false},
    {what: "Mobile Developer (React Native)", where: "SaveBiking", fromDate: "2012", toDate: "2013", isOngoing: false},
    {what: "Full Stack Developer (Ruby on Rails)", where: "WhiteLibra", fromDate: "2012", toDate: "2013", isOngoing: false},
  ],
  "educations": [
    {what: "Continuous learning", where: "", fromDate: "2012", toDate: "2013", ongoing: true},
    {what: "Master’s Degree - Computer Science", where: "University of Milan - Bicocca, Milan (Italy)", fromDate: "2012", toDate: "2013", isOngoing: false},
    {what: "Bachelor’s Degree - Computer Science", where: "University of Milan - Bicocca, Milan (Italy)", fromDate: "2012", toDate: "2013", isOngoing: false},
    {what: "Scientific PNI high school diploma", where: "Liceo G. Casiraghi, Cinisello B., Milan (Italy)", fromDate: "2012", toDate: "2013", isOngoing: false},
  ],
};

const Skill = ({name}: { name:string }) => (
  <YStack backgroundColor={"$white"} borderColor={"$color6"} borderWidth={1}>
    <Paragraph>
      {name}
    </Paragraph>
  </YStack>
)

const circleRadius = 4;
const halfCircleRadius = circleRadius /2;
const Experience = (experience: any) => (
  <XStack marginTop={"$6"} marginBottom={0}>
    <YStack paddingTop={"$2"} paddingHorizontal={"$6"}>
      <Circle marginLeft={-halfCircleRadius} marginBottom={circleRadius} size={circleRadius} backgroundColor="$color"  />
      <Separator alignSelf="stretch" vertical borderColor={"$gray8"} borderWidth={1}/>
    </YStack>
    <YStack>
      <Paragraph>
        {experience?.what}
      </Paragraph>
      <Paragraph>
        {experience?.where}
      </Paragraph>
      <Paragraph>
        {experience?.fromDate} - {experience?.isOngoing ? " Present" : experience?.toDate}
      </Paragraph>
    </YStack>
  </XStack>
)

export function AboutScreen() {
  const toast = useToastController()
  const theme = useTheme();

  const dataFetchingLink = useLink({
    href: '/data-fetching',
  })

  const virtualizedListLink = useLink({
    href: '/virtualized-list',
  })

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
            <Paragraph fontSize={"$5"} color={"$gray10"}><Ionicons name={"location-outline"}
                                                                   size={16}/> {profile?.info?.location}</Paragraph>
          </YStack>
        </YStack>
        <Paragraph fontSize={"$5"}>{profile?.info?.shortDescription}</Paragraph>

        <Section marginTop={"$6"}>
          <Section.Title>Skills</Section.Title>
          <Section.Body>
           <XStack flexWrap={"wrap"} gap={"$1"}>{profile.skills.map(skill => (<Skill name={skill.name}/>))}</XStack></Section.Body>
        </Section>

        <Section marginTop={"$6"}>
          <Section.Title >Work Experience</Section.Title>
          <Section.Body>
            <XStack flexWrap={"wrap"} gap={"$1"}>{profile.experiences.map(experience => (<Experience {...experience}/>))}</XStack></Section.Body>
        </Section>

        <Section marginTop={"$6"}>
          <Section.Title >Education</Section.Title>
          <Section.Body>
            <XStack flexWrap={"wrap"} gap={"$1"}>{profile.educations.map(education => (<Experience {...education} />))}</XStack></Section.Body>
        </Section>
      </YStack>
    </>
  )
}
