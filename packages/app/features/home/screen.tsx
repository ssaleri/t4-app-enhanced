import { Button, H1, Paragraph, Separator, Text, YStack } from '@t4/ui'
import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDeviceMedia } from 'app/hooks/useDeviceMedia'
import { Appearance } from 'react-native'

const frameworks = [
  {
    label: 'React Native',
    gradientDirection: '0deg',
    fromGradientColor: 'var(--blue9)',
    toGradientColor: 'var(--red9)',
  },
  {
    label: 'Next.js',
    gradientDirection: '0deg',
    fromGradientColor: 'blue',
    toGradientColor: 'green',
  },
  {
    label: 'Typescript',
    gradientDirection: '0deg',
    fromGradientColor: 'green',
    toGradientColor: 'yellow',
  },
  {
    label: 'Drizzle',
    gradientDirection: '0deg',
    fromGradientColor: 'yellow',
    toGradientColor: 'orange',
  },
  { label: 'tRPC', gradientDirection: '0deg', fromGradientColor: 'orange', toGradientColor: 'red' },
]

export function HomeScreen() {
  const [index, setIndex] = useState(0)
  const framework = frameworks[index]
  const gradientDirection = framework?.gradientDirection || '0deg'
  const { isDesktopWeb } = useDeviceMedia()

  const blogLink = useLink({
    href: '/Blog',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % frameworks.length)
    }, 1200)

    return () => clearInterval(interval)
  }, [frameworks.length])

  const colorScheme = Appearance.getColorScheme()
  const toggleTheme = () => Appearance.setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')

  return (
    <SafeAreaView flex={1}>
      <YStack flex={11} ai='center' space='$4' px='$4' pt={'$10'} pb={'$6'}>
        <SolitoImage src='/t4-logo.png' width={128} height={128} alt='T4 Logo' />
        <H1 textAlign='center'>👋 simonesaleri.dev</H1>
        <Separator />
        <Paragraph size={'$7'}>
          Cross-platform applications made with
          <Text
            backgroundClip={Platform.OS === 'web' ? 'text' : undefined}
            className='clip-text'
            fontWeight={'bold'}
            style={
              Platform.OS === 'web' && styles({ gradientDirection: gradientDirection }).gradientText
            }
          >
            {' ' + framework?.label}
          </Text>
        </Paragraph>
      </YStack>
      <YStack flex={1} jc='center' ai='center' space='$4' px='$4' py={'$5'}>
        <Button
          themeInverse
          {...blogLink}
          alignSelf='center'
          br='$5'
          size='$5'
          width={isDesktopWeb ? undefined : '100%'}
        >
          Jump in
        </Button>
        <Button
          onPress={toggleTheme}
          alignSelf='center'
          br='$5'
          size='$5'
          width={isDesktopWeb ? undefined : '100%'}
        >
          Toggle Theme
        </Button>
      </YStack>
    </SafeAreaView>
  )
}

const styles = ({ gradientDirection }: any) =>
  StyleSheet.create({
    gradientText: {
      backgroundClip: 'text',
      color: 'transparent',
      backgroundImage: `-webkit-linear-gradient(
                            ${gradientDirection},
                            var(--blue9),
                            var(--red9)
            )`,
    },
  })
