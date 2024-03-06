import { Animated, Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H3, ScrollView, useTheme, ZStack } from "tamagui";
import { useHeaderHeight } from '@react-navigation/elements';
import { H1 } from "@t4/ui";
import { LinearGradient } from 'tamagui/linear-gradient';
import { SolitoImage } from "solito/image";

const renderCover = ({colorFrom, colorTo, imageSrc, insets, windowWidth, windowHeight, theme}) => {
  return (
    <>
      {!!colorFrom && !!colorTo && !!windowWidth && !!windowHeight && (
        <LinearGradient
          width={windowWidth}
          height={windowHeight}
          borderRadius="$4"
          colors={[colorFrom, colorTo]}
          start={[0, 0]}
          end={[0, 1]}
        />
      )}
      {!!imageSrc && !!insets && (
        <ZStack>
          <SolitoImage
            src={imageSrc}
            height={400}
            alt='Project Logo'
            resizeMode={"cover"}
            style={stylesWithParams({insets}).headerImage}
          />
          <LinearGradient
            width={windowWidth}
            height={windowHeight}
            borderRadius="$4"
            colors={[theme.color3.val, theme.backgroundTransparent.val]}
            start={[0, 0]}
            end={[0, 1]}
            locations={[0, 0.3]}
          />
        </ZStack>
      )}
    </>
  )
};

const renderTitle = (title: string) => (title?.length > 15 ? <H3 color={"white"}>{title}</H3> :
  <H1 color={"white"}>{title}</H1>);

export const CoverScrollView = ({title, children, colorFrom, colorTo, imageSrc}) => {
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const oneThirdHeight = windowHeight / 4;
  const theme = useTheme();

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
        style={stylesWithParams({headerHeight, translation, theme}).animatedHeader}
      />

      <View style={styles.headerSection}>
        {renderCover({colorFrom, colorTo, imageSrc, insets, windowWidth, windowHeight, theme})}

        <View style={stylesWithParams({insets, oneThirdHeight, headerHeight, theme}).headerTitle}>
          {renderTitle(title)}
        </View>
      </View>
      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }}
        scrollEventThrottle={16}
        /*ListFooterComponent={<YStack height={"$12"}/>}*/
        contentContainerStyle={stylesWithParams({oneThirdHeight, theme}).container}
      >
        {children}
      </ScrollView>
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
    backgroundColor: theme?.color3?.val,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    opacity: translation?.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 1],
    }),
  },
  headerImage: {
    marginBottom: insets?.top,
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
    backgroundColor: theme?.color3?.val,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200,
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
