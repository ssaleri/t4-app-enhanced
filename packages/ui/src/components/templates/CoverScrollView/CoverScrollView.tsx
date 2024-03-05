import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Text, XStack, YStack } from "../../../index";
import React from "react";
import { SolitoImage } from "solito/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H1 } from "@t4/ui";
import { ScrollView } from "tamagui";

export const CoverScrollView = ({title, description, children }) => {
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height;
  const oneThirdHeight = windowHeight / 4;

  return(
    <>
      <View style={styles.headerSection} >
        <SolitoImage
          src={"https://picsum.photos/1024/400?random=2"}
          height={400}
          alt='Project Logo'
          resizeMode={"cover"}
          style={stylesWithParams({insets}).headerImage}
        />
        <View style={stylesWithParams({insets, oneThirdHeight}).headerTitle}>
          <H1>{title}</H1>
          <Text mt={8} fontSize={20} fontWeight={"bold"}>{description}</Text>
        </View>
      </View>
      <ScrollView
        /*ListFooterComponent={<YStack height={"$12"}/>}*/
        contentContainerStyle={stylesWithParams({oneThirdHeight}).container}
      >
        {children}
      </ScrollView>
    </>
    )
};

const borderRadius = 16;
const stylesWithParams = ({insets, oneThirdHeight}) => StyleSheet.create({
  headerImage: {
    marginBottom: insets?.top
  },
  headerTitle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: insets?.top,
    width: "100%",
    height: oneThirdHeight-insets?.top-borderRadius,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200,
    backgroundColor: "white",
    marginTop: oneThirdHeight-borderRadius,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    minHeight: "100%",
  },
});

const styles = StyleSheet.create({
  headerSection: {
    width: "100%",
    flexDirection: "column",
    position: "relative",
    flex: 1,
  },
})
