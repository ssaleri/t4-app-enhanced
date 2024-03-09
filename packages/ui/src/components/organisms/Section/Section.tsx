import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H1, H4, Separator } from '@t4/ui'

const Section = ({ children }) => {
  return <View>{children}</View>
}

const SectionTitle = ({ children }) => {
  return <H1 textAlign={'center'}>{children}</H1>
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
