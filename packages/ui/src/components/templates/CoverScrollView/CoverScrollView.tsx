import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { Text } from "../../../index";
import React, { useEffect, useRef, useState } from "react";
import { SolitoImage } from "solito/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, ScrollView } from "tamagui";
import { useHeaderHeight } from '@react-navigation/elements';
import { H1 } from "@t4/ui";

export const CoverScrollView = ({title, children, imageSrc}) => {
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height;
  const oneThirdHeight = windowHeight / 4;

  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const headerHeight = useHeaderHeight();

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
        style={stylesWithParams({headerHeight, translation}).animatedHeader}
      />

      <View style={styles.headerSection}>
        <SolitoImage
          src={imageSrc}
          height={400}
          alt='Project Logo'
          resizeMode={"cover"}
          style={stylesWithParams({insets}).headerImage}
        />
        <View style={stylesWithParams({insets, oneThirdHeight, headerHeight}).headerTitle}>
          {title?.length > 15 ? <H3>{title}</H3> : <H1>{title}</H1>}
        </View>
      </View>
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          console.log(scrolling);

          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        /*ListFooterComponent={<YStack height={"$12"}/>}*/
        contentContainerStyle={stylesWithParams({oneThirdHeight}).container}
      >
        {children}
      </ScrollView>
    </>
  )
};

const borderRadius = 16;
const stylesWithParams = ({insets, oneThirdHeight, headerHeight, translation}) => StyleSheet.create({
  animatedHeader: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: headerHeight,
    backgroundColor: 'white',
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
    height: oneThirdHeight-insets?.top-borderRadius,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200,
    backgroundColor: "white",
    marginTop: oneThirdHeight - borderRadius,
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
