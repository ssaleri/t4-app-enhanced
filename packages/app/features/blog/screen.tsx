import { Paragraph, ScrollView, YStack } from '@t4/ui'
import React from 'react'
import Section from "@t4/ui/src/components/organisms/Section/Section";

export function BlogScreen() {
  return (
    <ScrollView>
      <YStack flex={1} jc='center' ai='center' space='$4' px='$4' space='$4' pt={"$10"}>
        <Section>
          <Section.Title>Blog</Section.Title>
          <Section.Body>
            <Paragraph>This is the blog section</Paragraph>
          </Section.Body>
        </Section>
      </YStack>
    </ScrollView>
  )
}
