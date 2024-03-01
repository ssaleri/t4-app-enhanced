import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SolitoImage } from "solito/image";
import { Paragraph, XStack, YStack, Text } from "@t4/ui";
import { useDeviceMedia } from "app/hooks/useDeviceMedia";
import { useLink } from "solito/link";

const Project = ({project}: { project: Object }) => {
  const {isMobile} = useDeviceMedia();
  const projectImageDimension = isMobile ? 100 : 200;

  const projectLink = useLink({
    href: `/Portfolio/${project?.id}`,
  })

  return (
    <TouchableOpacity {...projectLink}>
      <XStack
        backgroundColor={"$gray5"}
        borderRadius={"$2"}
        flex={1}
        flexWrap={"wrap"}
        hoverStyle={{
          backgroundColor: '$blue6',
        }}
        p={"$2"}>
        <SolitoImage
          src='/t4-logo.png'
          width={projectImageDimension}
          height={projectImageDimension}
          alt='Project Logo'
        />
        <YStack flex={1} flexWrap={"no-wrap"} px={"$2"}>
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
