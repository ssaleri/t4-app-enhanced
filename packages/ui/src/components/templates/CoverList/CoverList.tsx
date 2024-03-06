import { Animated, Dimensions, FlatList, StyleSheet, View } from "react-native";
import { XStack, YStack } from "../../../index";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H1 } from "@t4/ui";
import { LinearGradient } from 'tamagui/linear-gradient'
import { H3, H6, useTheme } from "tamagui";

export const CoverList = ({title, colorFrom, colorTo, data, renderItem}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const oneThirdHeight = windowHeight / 4;

  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const headerHeight = insets.top;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  return (
    <>
      <Animated.View
        style={stylesWithParams({headerHeight, translation, theme}).animatedHeader}
      />

      <View style={styles.headerSection}>
        <LinearGradient
          width={windowWidth}
          height={windowHeight}
          borderRadius="$4"
          colors={[colorFrom, colorTo]}
          end={{ x: 0, y: 1 }}
          start={{ x: 0, y: 0 }}
        />
        <View style={stylesWithParams({insets, oneThirdHeight}).headerTitle}>
          {title?.length > 15 ? <H3 color={"$color6"}>{title}</H3> : <H1 color={"$color12"}>{title}</H1>}
        </View>
      </View>
      <FlatList
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }}
        scrollEventThrottle={16}
        ListHeaderComponent={<H6 textAlign={"center"} py={"$6"}>Tech news</H6>}
        ListFooterComponent={<YStack height={"$12"}/>}
        contentContainerStyle={stylesWithParams({oneThirdHeight, theme}).container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<XStack mt={"$4"}/>}
      />
    </>
  )
};

const borderRadius = 16;
const stylesWithParams = ({insets, oneThirdHeight, headerHeight, translation, theme}) => StyleSheet.create({
  animatedHeader: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: headerHeight,
    backgroundColor: theme?.color4?.val,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    opacity: translation?.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 1],
    }),
  },
  headerImage: {
    marginBottom: insets?.top
  },
  headerTitle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: insets?.top,
    width: "100%",
    height: oneThirdHeight - insets?.top - borderRadius,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200,
    backgroundColor:  theme?.color3?.val,
    marginTop: oneThirdHeight - borderRadius,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
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
