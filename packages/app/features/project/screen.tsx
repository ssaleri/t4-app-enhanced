import { Button, Paragraph, YStack } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { SolitoImage } from 'solito/image'
import React from 'react'
import { H4, H5, H6, ScrollView, XStack } from 'tamagui'
import { Dimensions } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import Octicons from '@expo/vector-icons/Octicons'

const { useParam } = createParam<{ id: string }>()

export const ProjectScreen = ({ project }): React.ReactNode => {
  const [id] = useParam('id')
  const router = useRouter()
  const windowWidth = Dimensions.get('window').width

  return (
    <ScrollView
      bounces={false}
      paddingBottom={200}
      flex={1}
      width={'100%'}
      paddingHorizontal={'$3'}
      contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <Button
        backgroundColor={'transparent'}
        themeInverse={true}
        position={'absolute'}
        top={'$3'}
        right={'$0'}
        iconAfter={<SimpleLineIcons name={'close'} size={32} />}
        onPress={() => router.back()}
      />

      <H5 marginVertical='$6'>{project?.title}</H5>

      <H4 space='$4'>{project?.role}</H4>

      <H6 marginTop='$6'>Description</H6>

      <Paragraph space='$4' marginVertical={'$6'}>
        {project?.description}
      </Paragraph>

      <H6 marginTop='$6'>Technologies</H6>

      <YStack space='$4' marginVertical={'$6'} alignSelf={'left'}>
        {project?.technologies?.map((tech) => (
          <XStack alignItems={'center'} space={'$3'}>
            <Octicons name='dot-fill' />
            <Paragraph key={tech}>{tech}</Paragraph>
          </XStack>
        ))}
      </YStack>

      <Paragraph fontWeight='700'>{`User ID: ${id}`}</Paragraph>
      <Button onPress={() => router.back()} icon={ChevronLeft} marginBottom={200}>
        Go Back
      </Button>
    </ScrollView>
  )
}
