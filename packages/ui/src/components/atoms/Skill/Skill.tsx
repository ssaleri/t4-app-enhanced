import { useTheme } from "tamagui";
import { Dimensions } from "react-native";
import { getTokenValue } from "@tamagui/core";
import { Image, Paragraph, Square, YStack } from "@t4/ui";
import { SvgUri } from "react-native-svg";
import React from "react";
import { isWeb } from "app/utils/device";

export const Skill = ({name, icon}: { name: string, icon: string }) => {
  const theme = useTheme();
  const windowWidth = Dimensions.get('window').width
  const cardWidth = isWeb ? (100) : ((windowWidth / 3) - getTokenValue("$8"));

  return (
    <Square size={cardWidth} backgroundColor="$color6" elevation="$2" borderRadius={"$4"}>
      <YStack alignItems={"center"}>
        {isWeb ? (
          <Image
            resizeMode={"contain"}
            src={icon}
            width={40}
            height={40}
          />
        ) : (
          <SvgUri
            uri={icon}
            width={40}
            height={40}
          />
        )}
        <Paragraph color={"$color12"}>
          {name}
        </Paragraph>
      </YStack>
    </Square>
  )
}
