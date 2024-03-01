import {
  Button,
  H1,
  H3,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
  Text
} from '@t4/ui'
import { ChevronDown } from '@tamagui/lucide-icons'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { useUser } from 'app/utils/supabase/hooks/useUser'
import { trpc } from 'app/utils/trpc'
import React, { useEffect, useState } from 'react'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'
import { useSheetOpen } from '../../atoms/sheet'
import Section from "@t4/ui/src/components/organisms/Section/Section";


const frameworks = [
  {label: 'React Native', gradientDirection: "0deg", fromGradientColor: "var(--blue9)", toGradientColor: "var(--red9)"},
  {label: 'Next.js', gradientDirection: "0deg", fromGradientColor: "blue", toGradientColor: "green"},
  {label: 'Typescript', gradientDirection: "0deg", fromGradientColor: "green", toGradientColor: "yellow"},
  {label: 'Drizzle', gradientDirection: "0deg", fromGradientColor: "yellow", toGradientColor: "orange"},
  {label: 'tRPC', gradientDirection: "0deg", fromGradientColor: "orange", toGradientColor: "red"}
];

export function HomeScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % frameworks.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [frameworks.length]);

  const signInLink = useLink({
    href: '/Home',
  })

  return (
    <YStack flex={1} jc='center' ai='center' space='$4' px='$4' space='$4' pt={"$10"}>
      <SolitoImage src='/t4-logo.png' width={128} height={128} alt='T4 Logo'/>
      <H1 textAlign='center'>👋 simone.dev</H1>
      <Separator/>
      <Paragraph size={'$7'}>
        Cross-platform applications made with
        <Text
          backgroundClip={'text'}
          className="clip-text"
          fontWeight={'bold'}
          style={{
            backgroundClip: "text",
            color: "transparent",
            backgroundImage: `-webkit-linear-gradient(
                            ${frameworks[index].gradientDirection},
                            var(--blue9),
                            var(--red9)
            )`,
          }}
        >
          {" " + frameworks[index].label}
        </Text>
      </Paragraph>


      <Button {...signInLink}>Sign in</Button>


    </YStack>
  )
}

