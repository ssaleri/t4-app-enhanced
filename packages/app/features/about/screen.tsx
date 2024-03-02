import { Paragraph, ScrollView, YStack } from '@t4/ui'
import React, { useState } from 'react'
import Section from "@t4/ui/src/components/organisms/Section/Section";
import { Button, H3, Sheet, useToastController, XStack } from "@t4/ui/src";
import { trpc } from "app/utils/trpc";
import { useSupabase } from "app/utils/supabase/hooks/useSupabase";
import { useUser } from "app/utils/supabase/hooks/useUser";
import { useLink } from "solito/link";
import { useSheetOpen } from "app/atoms/sheet";
import { ChevronDown } from "@tamagui/lucide-icons";

export function AboutScreen() {
  const utils = trpc.useContext()
  const supabase = useSupabase()
  const toast = useToastController()


  const dataFetchingLink = useLink({
    href: '/data-fetching',
  })

  const virtualizedListLink = useLink({
    href: '/virtualized-list',
  })

  return (
    <ScrollView>
      <YStack flex={1} pb={644} jc='center' ai='center' space='$4' px='$4' space='$4' pt={"$10"}>
        <Section>
          <Section.Title>About</Section.Title>
          <Section.Body>
            <Paragraph>This is the about section</Paragraph>
          </Section.Body>
        </Section>


        <H3>🦮🐴 App Demos</H3>
        <YStack space='$2'>
          <Button {...virtualizedListLink} space='$2'>
            Virtualized List
          </Button>
          <Button {...dataFetchingLink} space='$2'>
            Fetching Data
          </Button>
          <Button
            onPress={() => {
              toast.show('Hello world!', {
                message: 'Description here',
              })
            }}
          >
            Show Toast
          </Button>
        </YStack>

      </YStack>
    </ScrollView>
  )
}
