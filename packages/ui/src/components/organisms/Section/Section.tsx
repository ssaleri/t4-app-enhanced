import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H1, H2, H4, Separator } from '@t4/ui'
import { H5, H6, YStack } from "tamagui";

const Section = ({ children, ...props }) => {
  return <YStack {...props}>{children}</YStack>
}

const SectionTitle = ({children, ...props }) => {
  return <H6 {...props}>{children}</H6>
}

const SectionDescription = ({ children }) => {
  return (
    <H4 textAlign={'center'} marginVertical={'$6'}>
      {children}
    </H4>
  )
}

const SectionDivider = () => {
  return <Separator marginVertical={'$2'} borderColor={'$gray6'} />
}

const SectionBody = ({ children }) => {
  return <View>{children}</View>
}
Section.Title = SectionTitle
Section.Description = SectionDescription
Section.Divider = SectionDivider
Section.Body = SectionBody
export default Section
