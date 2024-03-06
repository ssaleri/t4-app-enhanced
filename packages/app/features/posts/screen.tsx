import { Button, H2, Paragraph, YStack,ScrollView } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from "solito/router";
import { H1, useTheme, XStack } from "tamagui";
import { SolitoImage } from "solito/image";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const {useParam} = createParam<{ id: string }>()

export const PostScreen = ({post}): React.ReactNode => {
  const [id] = useParam('id')
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets()

  return (
      <YStack flex={1} space={"$2"} p={"$4"}>
        <XStack justifyContent={"space-between"} space={"$2"}>
          <Paragraph textAlign='center' fontWeight='500' color={theme?.color12?.val}><Ionicons size={16} name={"person-circle"}/> {post.author}</Paragraph>
          <Paragraph textAlign='center' fontWeight='500' color={theme?.color12?.val}><Ionicons size={16} name={"calendar-outline"}/> {post.date}</Paragraph>
        </XStack>

        <Paragraph textAlign='left' space='$4' marginVertical={"$6"}>
          {post.body}
        </Paragraph>


        <Button marginTop={"auto"} marginBottom={insets.bottom} onPress={() => router.back()} icon={ChevronLeft}>
          Go Back
        </Button>
      </YStack>
  )
}
