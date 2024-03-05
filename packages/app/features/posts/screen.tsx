import { Button, H2, Paragraph, YStack,ScrollView } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from "solito/router";
import { H1 } from "tamagui";
import { SolitoImage } from "solito/image";
import React from "react";

const {useParam} = createParam<{ id: string }>()

export const PostScreen = (): React.ReactNode => {
  const [id] = useParam('id')
  const router = useRouter();

  const post = {
    id: id,
    title: 'Post Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex nec libero tincidunt fermentum',
    author: "Simone Saleri",
    date: "2021-10-10",
    image: "https://picsum.photos/320/320?random=1"
  }

  return (
    <ScrollView flex={1}>
      <YStack height={200}>
        <SolitoImage
          src={post.image}
          fill
          alt='Project Logo'
          resizeMode="cover"
        />
      </YStack>
      <YStack flex={1} space={"$2"} p={"$4"}>
        <H1 textAlign='left' space='$4'>
          {post.title}
        </H1>
        <Paragraph textAlign='left' space='$4'>
          {post.body}
        </Paragraph>
        <Paragraph textAlign='center' fontWeight='700'>{`User ID: ${id}`}</Paragraph>
        <Button onPress={() => router.back()} icon={ChevronLeft}>
          Go Home
        </Button>
      </YStack>
    </ScrollView>
  )
}
