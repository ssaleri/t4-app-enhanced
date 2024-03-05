import { Button, Paragraph, YStack } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from "solito/router";
import { SolitoImage } from "solito/image";
import React from "react";
import { H4, H5, H6, ScrollView, XStack } from "tamagui";
import { Dimensions } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Octicons from "@expo/vector-icons/Octicons";

const {useParam} = createParam<{ id: string }>()

const projects = [
  {
    id: 1,
    title: 'Remote Work Social Platform',
    role: 'Full-stack Developer',
    description: 'I worked on the development of a social platform for remote workers. The goal is to simplify the whole process of any project realization: you can join the platform if you are either a professional or a sponsor, the platform will guide you from the initial phase of creating the right team of professionals, to every phase of the project, reducing burocracy and time-consuming tasks (e.g. legal). The platform was built from scratch using Ruby on Rails as a full-stack framework and Bootstrap as a front-end framework. My responsibilities in this project passed through different layers, from translating clients requests into tech requirements, to the development of the platform, to the deployment and maintenance of the platform.',
    image: "https://picsum.photos/320/320?random=1",
    technologies: ['Bootstrap', 'Ruby on Rails', 'Redis', 'PostgreSQL', 'Heroku'],
    period: "2 years"
  },
];

export const ProjectScreen = (): React.ReactNode => {
  const [id] = useParam('id')
  const router = useRouter();
  const windowWidth = Dimensions.get('window').width;

  const project = projects?.[id - 1];

  return (
    <ScrollView bounces={false} paddingBottom={200} flex={1} width={"100%"} paddingHorizontal={"$3"}
                contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}}>
      <SolitoImage
        src={project?.image}
        height={160}
        width={windowWidth}
        resizeMode="cover"
      />
      <Button backgroundColor={"transparent"} themeInverse={true} position={"absolute"} top={"$3"} right={"$0"}
              iconAfter={<SimpleLineIcons name={"close"} size={32}/>} onPress={() => router.back()}/>

      <H5 marginVertical='$6'>
        {project?.title}
      </H5>

      <H4 space='$4'>
        {project?.role}
      </H4>

      <H6 marginTop='$6'>
        Description
      </H6>

      <Paragraph space='$4' marginVertical={"$6"}>
        {project?.description}
      </Paragraph>

      <H6 marginTop='$6'>
        Technologies
      </H6>

      <YStack space='$4' marginVertical={"$6"} alignSelf={"left"}>
        {project?.technologies?.map((tech) => (
          <XStack alignItems={"center"} space={"$3"}><Octicons name="dot-fill"/><Paragraph key={tech}>{tech}</Paragraph></XStack>
        ))}
      </YStack>

      <Paragraph fontWeight='700'>{`User ID: ${id}`}</Paragraph>
      <Button onPress={() => router.back()} icon={ChevronLeft} marginBottom={200}>
        Go Back
      </Button>
    </ScrollView>
  )
}
