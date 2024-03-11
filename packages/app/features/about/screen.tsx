import { Avatar, Circle, Image, Paragraph, Separator, Square, Text, XStack, YStack } from '@t4/ui'
import React from 'react'
import { useTheme } from "tamagui";
import Section from "@t4/ui/src/components/organisms/Section/Section";
import { ActivityIndicator, Dimensions, Platform } from "react-native";
import { getTokenValue } from "@tamagui/core"
import { MapPin } from "@tamagui/lucide-icons";
import { SvgUri } from 'react-native-svg';

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

  return (
    <Square size={cardWidth} backgroundColor="$color6" elevation="$2" borderRadius={"$4"}>
      <YStack alignItems={"center"}>
        {Platform.OS === "web" ? (
          <Image
            resizeMode={"contain"}
            src={icon}
            width={40}
            height={40}
          />
          ) : (
          <SvgUri
            uri={icon}
            width={40}
            height={40}
          />
        )}
        <Paragraph color={color}>
          {name}
        </Paragraph>
      </YStack>
    </Square>
  )
}

const circleRadius = 2;
const Experience = (experience: any) => (
  <XStack>
    <YStack paddingLeft={"$6"} paddingRight={"$8"} paddingBottom={circleRadius * 2} paddingTop={circleRadius * 4}>
      <Circle marginLeft={-circleRadius * 2} marginBottom={circleRadius * 4} size={circleRadius * 4}
              backgroundColor="$color"/>
      <Separator alignSelf="stretch" vertical borderColor={"$gray8"} borderWidth={1}/>
    </YStack>
    <YStack paddingBottom={"$6"} flex={1} gap={"$1"}>
      {experience?.where && (<Text fontSize={"$6"} fontWeight={600}>
        {experience.where}
      </Text>)}

      {experience?.location && (
        <Text fontSize={"$4"} color={"$gray10"} paddingTop={"$1"} paddingBottom={"$3"}>
          <MapPin size={16} color={"$gray10"}/>{experience.location}
        </Text>
        )
       }

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

  //const Icon = dynamic(() => import('@expo/vector-icons/Ionicons'), {ssr: false});

  return (
    <>
      <YStack space={'$4'} paddingTop={"$4"} paddingBottom={200}>
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
            <Paragraph fontSize={"$5"} color={"$gray10"}>
              {/*<Ionicons name={"location-outline"} size={16}/>*/}
              <MapPin size={16} color={"$gray10"}/>
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
