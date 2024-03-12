import { Avatar, Paragraph, XStack, YStack } from '@t4/ui'
import React from 'react'
import { useTheme } from "tamagui";
import Section from "@t4/ui/src/components/organisms/Section/Section";
import { ActivityIndicator, Platform } from "react-native";
import { MapPin } from "@tamagui/lucide-icons";
import { Experience } from "@t4/ui/src/components/atoms/Experience/Experience";
import { Skill } from "@t4/ui/src/components/atoms/Skill/Skill";
import { Text } from "@t4/ui/src";

const profile = {
  "info": {
    "imageSrc": "https://glylbhlvgzugwhjyenea.supabase.co/storage/v1/object/public/simonesaleri.dev/simone-saleri-cv-pic.JPG",
    "fullName": "Simone Saleri",
    "job": "Software developer",
    "location": "Milan, Italy",
    "shortDescription": "👋 Hello! I'm a software engineer, passionate about crafting beautiful and functional apps."
  },
  "skills": [
    {name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    {name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"},
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {name: "Ruby on Rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg"},
    {name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"},
    {name: "tRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg"},
    {name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
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
      where: "Reiser (SaveBiking)",
      location: "Remote (Lainate, Milan, Italy)",
      fromDate: "2020",
      toDate: "2021",
      isOngoing: false,
      "shortDescription": "I'm a software engineer, passionate about crafting beautiful and functional apps."
    },
    {
      what: "Full Stack Developer (Ruby on Rails)",
      where: "Reiser (WhiteLibra)",
      location: "Remote (Lainate, Milan, Italy)",
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

export function AboutScreen() {
  const theme = useTheme();
  const isWeb = Platform.OS === "web";
  const isMobileApp = !isWeb;

  return (
    <>
      <YStack space={'$4'} paddingTop={isMobileApp && "$4"} paddingBottom={200} maxWidth={1200} marginHorizontal={"auto"}>
        <YStack marginTop={-64} marginBottom={"$4"} alignItems={"center"}>
          <Avatar circular size={"$13"} style={{borderWidth: 4, borderColor: theme.background.val}}>
            <Avatar.Image width="100%" height="100%" src={profile?.info?.imageSrc} />
            <Avatar.Fallback backgroundColor="$gray6" justifyContent={"center"} alignItems={"center"}>
              <ActivityIndicator animating/>
            </Avatar.Fallback>
          </Avatar>
          <YStack marginTop={"$4"} alignItems={"center"} space={"$2"}>
            <Paragraph fontSize={"$8"} fontWeight={700}>{profile?.info?.fullName}</Paragraph>
            <Paragraph fontSize={"$5"}>{profile?.info?.job}</Paragraph>

            <XStack alignItems={"center"} marginTop={"$1"} marginBottom={"$3"} space={"$1"}>
              <MapPin size={16} color={"$gray10"}/>
              <Paragraph fontSize={"$5"} color={"$gray10"} alignItems={"flex-end"}>
                {profile?.info?.location}
              </Paragraph>
            </XStack>
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
            {profile.experiences.map(experience => (
              <Experience key={experience.where} {...experience}/>))}</Section.Body>
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
