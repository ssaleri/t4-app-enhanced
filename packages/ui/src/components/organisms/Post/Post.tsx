import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SolitoImage } from "solito/image";
import { Paragraph, XStack, YStack, Text, H1, H4 } from "@t4/ui";
import { useDeviceMedia } from "app/hooks/useDeviceMedia";
import { useLink } from "solito/link";

const Post = ({post}: { post: Object }) => {
  const {isMobile} = useDeviceMedia();
  const projectImageDimension = isMobile ? 80 : 200;

  const postLink = useLink({
    href: `/Posts/${post?.id}`,
  })

  return (
    <TouchableOpacity {...postLink}>
      <XStack
        ai={"center"}
        p={"$2"}
        backgroundColor={"$gray5"}
        borderRadius={"$2"}
        hoverStyle={{
          backgroundColor: '$blue6',
        }}
      >
        <SolitoImage
          src={post?.image}
          width={projectImageDimension}
          height={projectImageDimension}
          alt='Project Logo'
        />
        <YStack flex={1} flexWrap={"no-wrap"} px={"$2"}>
          <Paragraph fontWeight={"600"}>
            {`#${post?.id} - ${post?.title}`}
          </Paragraph>
          <Text>{`Author: ${post?.author}`}</Text>
        </YStack>
      </XStack>
    </TouchableOpacity>
  );
};
export default Post;
