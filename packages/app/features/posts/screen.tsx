import { Button, H2, Paragraph, YStack,ScrollView } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from "solito/router";
import { H1, XStack } from "tamagui";
import { SolitoImage } from "solito/image";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";

const {useParam} = createParam<{ id: string }>()

export const PostScreen = ({post}): React.ReactNode => {
  const [id] = useParam('id')
  const router = useRouter();

  return (
      <YStack flex={1} space={"$2"} p={"$4"}>
        <XStack justifyContent={"space-between"}>
          <Ionicons size={16} name={"person-circle"}><Paragraph textAlign='center' fontWeight='500'>{post.author}</Paragraph></Ionicons>
          <Ionicons size={16} name={"calendar-outline"}><Paragraph textAlign='center' fontWeight='500'>{post.date}</Paragraph></Ionicons>
        </XStack>

        <Paragraph textAlign='left' space='$4' marginVertical={"$6"}>
          {post.body}
        </Paragraph>

        <Paragraph textAlign='center' fontWeight='700'>{`User ID: ${id}`}</Paragraph>
        <Button onPress={() => router.back()} icon={ChevronLeft}>
          Go Back
        </Button>
      </YStack>
  )
}
