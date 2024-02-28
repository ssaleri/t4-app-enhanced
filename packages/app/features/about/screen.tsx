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
  const {user} = useUser()
  const toast = useToastController()

  const signInLink = useLink({
    href: '/sign-in',
  })

  const signUpLink = useLink({
    href: '/sign-up',
  })

  const dataFetchingLink = useLink({
    href: '/data-fetching',
  })

  const virtualizedListLink = useLink({
    href: '/virtualized-list',
  })

  const upsListLink = useLink({
    href: '/ups',
  })

  const paramsLink = useLink({
    href: '/params/tim',
  })

  return (
    <ScrollView>
      <YStack flex={1} jc='center' ai='center' space='$4' px='$4' space='$4' pt={"$10"}>
        <Section>
          <Section.Title>About</Section.Title>
          <Section.Body>
            <Paragraph>This is the about section</Paragraph>
          </Section.Body>
        </Section>



        <Section>
          <Section.Title>Title of Section 1</Section.Title>
          <Section.Body>
            <Paragraph>Content of Section 1 goes here...</Paragraph>
          </Section.Body>
        </Section>

        <Section>
          <Section.Title>Title of Section 2</Section.Title>
          <Section.Body>
            <Paragraph>Content of Section 2 goes here...</Paragraph>
          </Section.Body>
        </Section>

        <H3>🦮🐴 App Demos</H3>
        <YStack space='$2'>
          <Button {...virtualizedListLink} space='$2'>
            Virtualized List
          </Button>
          <Button {...upsListLink} space='$2'>
            Ups List
          </Button>
          <Button {...dataFetchingLink} space='$2'>
            Fetching Data
          </Button>
          <Button {...paramsLink} space='$2'>
            Params
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
          <SheetDemo/>
        </YStack>
        {user ? (
          <Button
            onPress={async () => {
              supabase.auth.signOut()
              // Clear tanstack query cache of authenticated routes
              utils.auth.secretMessage.reset()
            }}
            space='$2'
          >
            Sign Out
          </Button>
        ) : (
          <XStack space='$2'>
            <Button {...signInLink} space='$2'>
              Sign In
            </Button>
            <Button {...signUpLink} space='$2'>
              Sign Up
            </Button>
          </XStack>
        )}

      </YStack>
    </ScrollView>
  )
}


const SheetDemo = (): React.ReactNode => {
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  return (
    <>
      <Button onPress={() => setOpen((x) => !x)} space='$2'>
        Bottom Sheet
      </Button>
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay/>
        <Sheet.Frame alignItems='center' justifyContent='center'>
          <Sheet.Handle/>
          <Button
            size='$6'
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
