import { H1, H2, Paragraph, YStack } from '@t4/ui'
import { trpc } from 'app/utils/trpc'
import React from 'react'
import { match } from 'ts-pattern'
import { error, loading, success } from '../../utils/trpc/patterns'
import { Button, XStack, ScrollView } from "@t4/ui/src";
import { useUser } from "app/utils/supabase/hooks/useUser";
import { useLink } from "solito/link";
import { supabase } from "app/utils/supabase/client";
import Section from "@t4/ui/src/components/organisms/Section/Section";

export function DataFetchingScreen() {
  const {user} = useUser()
  const signInLink = useLink({
    href: '/sign-in',
  })

  const signUpLink = useLink({
    href: '/sign-up',
  })

  const helloWorld = trpc.hello.world.useQuery<string>('world')
  const helloWorldLayout = match(helloWorld)
    .with(error, () => <Paragraph>{helloWorld.failureReason?.message}</Paragraph>)
    .with(loading, () => <Paragraph>Loading...</Paragraph>)
    .with(success, () => <Paragraph>{helloWorld.data}</Paragraph>)
    .otherwise(() => <Paragraph>{helloWorld.failureReason?.message}</Paragraph>)

  const protectedRoute = trpc.auth.secretMessage.useQuery<string>()
  const protectedRouteLayout = match(protectedRoute)
    .with(error, () => <Paragraph>{protectedRoute.failureReason?.message}</Paragraph>)
    .with(loading, () => <Paragraph>Loading...</Paragraph>)
    .with(success, () => <Paragraph>{protectedRoute.data}</Paragraph>)
    .otherwise(() => <Paragraph>{protectedRoute.failureReason?.message}</Paragraph>)

  return (
    <ScrollView contentContainerStyle={{alignItems: "center"}}>
      <Section>
        <Section.Title>Data Fetching</Section.Title>
        <Section.Description>Useful resources to logged users</Section.Description>
      </Section>
      <H2>Public Route</H2>
      {helloWorldLayout}
      <H2>Protected Route</H2>
      {protectedRouteLayout}

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
    </ScrollView>
  )
}
