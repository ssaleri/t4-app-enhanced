import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SolitoImage } from "solito/image";
import { Paragraph, XStack, YStack } from "tamagui";
import { useDeviceMedia } from "app/hooks/useDeviceMedia";
import { useLink } from "solito/link";

const Project = ({project}: { project: Object }) => {
  const {isMobile} = useDeviceMedia();
  const projectImageDimension = isMobile ? 100 : 200;

  const projectLink = useLink({
    href: `/portfolio/${project?.id}`,
  })


  return (
    <TouchableOpacity {...projectLink}>
    <XStack borderColor={"$blue6"} borderWidth={"1"} borderRadius={"$6"} backgroundColor={"$blue3"} marginTop={"$4"} width={1000}>
      <SolitoImage
        src='/t4-logo.png'
        width={projectImageDimension}
        height={projectImageDimension}
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
    </TouchableOpacity>
  );
};
export default Project;
