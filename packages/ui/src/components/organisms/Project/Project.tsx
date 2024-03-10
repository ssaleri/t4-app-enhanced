import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SolitoImage } from 'solito/image'
import { Paragraph, XStack, YStack, Text, H1, H4 } from '@t4/ui'
import { useDeviceMedia } from 'app/hooks/useDeviceMedia'
import { useLink } from 'solito/link'

const Project = ({ project }: { project: Object }) => {
  const { isMobile } = useDeviceMedia()
  const projectImageDimension = isMobile ? 80 : 200

  const projectLink = useLink({
    href: `/Projects/${project?.id}`,
  })

  return (
    <TouchableOpacity {...projectLink}>
      <XStack
        ai={'center'}
        p={'$2'}
        backgroundColor={'$gray5'}
        borderRadius={'$2'}
        hoverStyle={{
          backgroundColor: '$blue6',
        }}
      >
        <SolitoImage
          src='/t4-logo.png'
          width={projectImageDimension}
          height={projectImageDimension}
          alt='Project Logo'
        />
        <YStack flex={1} px={'$2'}>
          <Paragraph fontWeight={'600'}>
            {`#${project?.id}`} - {`${project?.shortDescription}`}
          </Paragraph>
          <Text>{`Role: ${project?.role}`}</Text>
          <XStack flex={1} ai={'center'} justifyContent={'flex-start'} marginTop='$2' gap={'$2'}>
            {project?.technologies}
          </XStack>
        </YStack>
      </XStack>
    </TouchableOpacity>
  )
}
export default Project
