import dynamic from "next/dynamic";
import { useTheme, ZStack } from "tamagui";
import { SolitoImage } from "solito/image";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { isWeb } from "app/utils/device";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LinearGradient = dynamic(() => import("tamagui/linear-gradient").then(module => module.LinearGradient), {ssr: false});

export const Cover = ({colorFrom, imageSrc}) => {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height

  return (
    <>
      {!!colorFrom && !!windowHeight && (
        <LinearGradient
          position={"fixed"}
          width={"100%"}
          height={windowHeight}
          colors={[colorFrom, "$background"]}
          start={[0, 0]}
          end={[0, 1]}
          locations={[0, 0.5, 1]}
        />
      )}
      {!!imageSrc && !!insets && (
        <ZStack>
          <SolitoImage
            src={imageSrc}
            height={400}
            alt='Project Logo'
            resizeMode={'cover'}
            style={stylesWithParams(insets).headerImage}
          />
          <LinearGradient
            width={"100%"}
            height={windowHeight}
            colors={[theme.color6.val, theme.backgroundTransparent.val]}
            start={[0, 0]}
            end={[0, 1]}
            locations={[0, 0.25]}
          />
        </ZStack>
      )}
    </>
  )
}

const stylesWithParams = ({insets}) => StyleSheet.create({
  headerImage: {
    marginBottom: insets?.top,
  },
})
