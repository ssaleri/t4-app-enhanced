import { Button, Paragraph, YStack, H2, useTheme, XStack, H3 } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BlogPost } from '@t4/api/src/db/tables/BlogPost'
import { IconLabel } from '@t4/ui/src/components/molecules/IconLabel/IconLabel'

const { useParam } = createParam<{ id: string }>()

export const PostScreen = ({ post }: { post: BlogPost }): React.ReactNode => {
  const router = useRouter()
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  return (
    <YStack flex={1} space={'$4'}>
      <XStack justifyContent={'space-between'} space={'$2'}>
        <IconLabel
          icon={<Ionicons size={16} name={'person-circle'} />}
          label={post.author}
          color={theme.color11.val}
        />
        <IconLabel
          icon={<Ionicons size={16} name={'calendar-outline'} />}
          label={post.date}
          color={theme.color11.val}
        />
      </XStack>
      <H3 textAlign='left' fontWeight='700' color={theme.color12.val}>
        {post.title}
      </H3>

      <Paragraph textAlign='left'>{post.content}</Paragraph>

      <Button
        marginTop={'auto'}
        marginBottom={insets.bottom}
        onPress={() => router.back()}
        icon={ChevronLeft}
      >
        Go Back
      </Button>
    </YStack>
  )
}
