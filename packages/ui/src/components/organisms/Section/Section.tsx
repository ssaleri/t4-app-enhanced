import React from 'react';
import { StyleSheet, View } from 'react-native';
import { H1, H4 } from '@t4/ui';

const Section = ({children}) => {
  return (
    <View style={styles.section}>
      {children}
    </View>
  );
};

const SectionTitle = ({children}) => {
  return (
    <H1 textAlign={"center"}>
      {children}
    </H1>
  );
};

const SectionDescription = ({children}) => {
  return (
    <H4 textAlign={"center"} marginVertical={'$6'}>
      {children}
    </H4>
  );
};

const SectionBody = ({children}) => {
  return (
    <View style={styles.body}>
      {children}
    </View>
  );
};
Section.Title = SectionTitle;
Section.Description = SectionDescription;
Section.Body = SectionBody;
export default Section;

const styles = StyleSheet.create({
  section: {
    //marginBottom: 32,
  },
  body: {
    //paddingHorizontal: 16,
  },
});
