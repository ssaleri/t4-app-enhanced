import React from 'react';
import { SolitoImage } from "solito/image";
import { Paragraph, XStack, YStack } from "tamagui";

const Project = ({project, numColumns}: { project: Object, numColumns: number }) => {
  return (
    <XStack borderColor={"$blue6"} borderWidth={"1"} borderRadius={"$6"} backgroundColor={"$blue3"} marginTop={"$4"}
            marginRight={numColumns > 1 ? "$4" : undefined}>
      <SolitoImage
        src='/t4-logo.png'
        width={200}
        height={200}
        alt='Project Logo'
      />
      <YStack paddingHorizontal={16}>
        <Paragraph paddingTop='$2' fontSize={18}>
          {`${project?.name}`}
        </Paragraph>
        <Paragraph paddingTop='$2' fontSize={14}>
          {`${project?.shortDescription}`}
        </Paragraph>
      </YStack>
    </XStack>
  );
};
export default Project;
