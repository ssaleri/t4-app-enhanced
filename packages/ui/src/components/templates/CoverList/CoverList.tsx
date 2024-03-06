import { Animated, Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Text, XStack, YStack } from "../../../index";
import React, { useEffect, useRef, useState } from "react";
import { SolitoImage } from "solito/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { H1 } from "@t4/ui";
import { useHeaderHeight } from "@react-navigation/elements";

export const CoverList = ({title, description, data, renderItem}) => {
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height;
  const oneThirdHeight = windowHeight / 4;

  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-100)).current;
  const headerHeight = insets.top;

  console.log(headerHeight);

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
          src={"https://picsum.photos/1024/400?random=2"}
          height={400}
          alt='Project Logo'
          resizeMode={"cover"}
          style={stylesWithParams({insets}).headerImage}
        />
        <View style={stylesWithParams({insets, oneThirdHeight}).headerTitle}>
          <H1>{title}</H1>
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
        ListFooterComponent={<YStack height={"$12"}/>}
        contentContainerStyle={stylesWithParams({oneThirdHeight}).container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<XStack mt={"$2"}/>}
      />
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
    height: oneThirdHeight - insets?.top - borderRadius,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 200,
    backgroundColor: "white",
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
