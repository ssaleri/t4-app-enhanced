import { Circle, Paragraph, Separator, Text, XStack, YStack } from "../../../index";
import { MapPin } from "@tamagui/lucide-icons";
import React from "react";

const circleRadius = 2;
export const Experience = (experience: any) => (
  <XStack>
    <YStack
      paddingLeft={"$2"}
      paddingRight={"$4"}
      paddingBottom={circleRadius * 2}
      paddingTop={circleRadius * 4}
      $gtSm={{
        paddingRight: "$10"
      }}

    >
      <Circle marginLeft={-circleRadius * 2} marginBottom={circleRadius * 4} size={circleRadius * 4}
              backgroundColor="$color"/>
      <Separator alignSelf="stretch" vertical borderColor={"$gray8"} borderWidth={1}/>
    </YStack>
    <YStack
      paddingBottom={"$6"}
      flex={1}
      gap={"$1"}
      $gtSm={{
        paddingBottom: "$10"
      }}>
      {experience?.where && (<Paragraph fontSize={"$5"} fontWeight={600}>
        {experience.where}
      </Paragraph>)}

      {experience?.location && (
        <XStack alignItems={"center"} marginTop={"$1"} marginBottom={"$3"} space={"$1"}>
          <MapPin size={14} color={"$gray10"}/>
          <Paragraph fontSize={"$3"} color={"$gray10"}>{experience.location}</Paragraph>
        </XStack>
      )
      }

      {experience?.what && <Paragraph fontSize={"$2"} fontWeight={600} letterSpacing={1}>
        {experience?.what?.toUpperCase()}
      </Paragraph>}

      {experience?.shortDescription && <Paragraph fontSize={"$4"}>
        {experience?.shortDescription}
      </Paragraph>}


      {experience?.fromDate && (experience?.toDate || experience?.isOngoing) && <Paragraph>
        {experience.fromDate} - {experience?.isOngoing ? " Present" : experience.toDate}
      </Paragraph>}
    </YStack>
  </XStack>
)
