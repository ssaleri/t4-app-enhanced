import { Circle, Paragraph, Separator, Text, XStack, YStack } from "../../../index";
import { MapPin } from "@tamagui/lucide-icons";
import React from "react";

const circleRadius = 2;
export const Experience = (experience: any) => (
  <XStack>
    <YStack paddingLeft={"$6"} paddingRight={"$8"} paddingBottom={circleRadius * 2} paddingTop={circleRadius * 4}>
      <Circle marginLeft={-circleRadius * 2} marginBottom={circleRadius * 4} size={circleRadius * 4}
              backgroundColor="$color"/>
      <Separator alignSelf="stretch" vertical borderColor={"$gray8"} borderWidth={1}/>
    </YStack>
    <YStack paddingBottom={"$6"} flex={1} gap={"$1"}>
      {experience?.where && (<Text fontSize={"$6"} fontWeight={600}>
        {experience.where}
      </Text>)}

      {experience?.location && (
        <XStack alignItems={"center"} marginTop={"$1"} marginBottom={"$3"} space={"$1"}>
          <MapPin size={16} color={"$gray10"}/>
          <Text fontSize={"$4"} color={"$gray10"}>{experience.location}</Text>
        </XStack>
      )
      }

      {experience?.what && <Text fontSize={"$4"} fontWeight={600} fontFamily={""}>
        {experience?.what}
      </Text>}

      {experience?.shortDescription && <Text fontSize={"$4"}>
        {experience?.shortDescription}
      </Text>}


      {experience?.fromDate && (experience?.toDate || experience?.isOngoing) && <Paragraph>
        {experience.fromDate} - {experience?.isOngoing ? " Present" : experience.toDate}
      </Paragraph>}
    </YStack>
  </XStack>
)
