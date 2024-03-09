import { Paragraph, ScrollView, YStack } from '@t4/ui'
import React, { useState } from 'react'
import Section from '@t4/ui/src/components/organisms/Section/Section'
import { Button, H3, Sheet, useToastController, XStack } from '@t4/ui/src'
import { trpc } from 'app/utils/trpc'
import { useSupabase } from 'app/utils/supabase/hooks/useSupabase'
import { useUser } from 'app/utils/supabase/hooks/useUser'
import { useLink } from 'solito/link'
import { useSheetOpen } from 'app/atoms/sheet'
import { ChevronDown } from '@tamagui/lucide-icons'
import { H4, H5 } from 'tamagui'

export function AboutScreen() {
  const toast = useToastController()

  const dataFetchingLink = useLink({
    href: '/data-fetching',
  })

  const virtualizedListLink = useLink({
    href: '/virtualized-list',
  })

  return (
    <>
      <H5 textAlign={'center'} py={'$6'}>
        Who am I?
      </H5>

      <YStack space={'$4'} paddingBottom={200}>
        <Paragraph>
          👋Hello! I'm <Paragraph fontWeight='800'>Simone Saleri</Paragraph> and I'm a software
          engineer, passionate about crafting beautiful and functional apps. This app in particular
          is a <Paragraph fontWeight='800'>React Universal App</Paragraph> which targets both mobile
          and web from a single shared code.
        </Paragraph>
        <Paragraph>
          This app is built with{' '}
          <Paragraph fontWeight='800'>React Native, Next.js and TypeScript</Paragraph>, among other
          lovely tech stuff. It uses <Paragraph fontWeight='800'>Jotai</Paragraph> for state
          management and <Paragraph fontWeight='800'>tRPC</Paragraph> for remote procedure calls.
        </Paragraph>
        <Paragraph>
          The app showcases the possibility of solo developers and small teams with limited
          workforce to{' '}
          <Paragraph fontWeight='800'>
            target multiple platforms, reducing costs and time-to-market
          </Paragraph>{' '}
          without sacrifiying quality.
        </Paragraph>

        <Paragraph>
          This idea came to me after realizing that in the past years, the majority of the apps I've
          been working on were targeting both mobile and web without sharing much code, thus
          requiring a lot of duplicated efforts.
        </Paragraph>

        <Paragraph>
          Also, since those apps were either business-driven or design-driven, many decisions were
          made to prioritize aesthetics, functionality and time-to-market over performance, security
          and maintainability.
        </Paragraph>

        <Paragraph>
          This app is a way to showcase{' '}
          <Paragraph fontWeight='800'>how a modern app can be built</Paragraph> with a focus on
          performance and maintainability,
          <Paragraph fontWeight='800'> dramatically reducing development efforts</Paragraph>,
          without sacrifiying aesthetics and functionality, sharing as much code as possible.
        </Paragraph>
      </YStack>
    </>
  )
}
