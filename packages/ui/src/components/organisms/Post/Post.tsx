import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SolitoImage } from "solito/image";
import { Paragraph, XStack, YStack, Text, H1, H4, Card, Image } from "@t4/ui";
import { useDeviceMedia } from "app/hooks/useDeviceMedia";
import { useLink } from "solito/link";
import { Button, H2, useTheme, ZStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { BlogPost } from "@t4/api/src/db/tables/BlogPost";

const shadow = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3,
  elevation: 5,
};
const Post = ({post}: { post: BlogPost }) => {
  const theme = useTheme();
  const minHeight = 212;

  const postLink = useLink({
    href: `/Posts/${post?.id}`,
  })

  return (
    <TouchableOpacity {...postLink}>
      <Card {...shadow} size="$4" bordered borderRadius="$6" minHeight={minHeight}>
        <Card.Header padded>
          <H2 color={theme.color12.val}>{post?.title}</H2>
          <Paragraph color={theme.color12.val}>{`by ${post?.author}`}</Paragraph>
        </Card.Header>
        <Card.Background backgroundColor={theme.color6.val} borderRadius="$6">
          <ZStack>
            <SolitoImage
              src={post?.image}
              height={minHeight}
              alt='Project Logo'
              resizeMode={"cover"}
            />
            <LinearGradient
              height={minHeight}
              borderRadius="$4"
              colors={[theme.color3.val, theme.backgroundTransparent.val]}
              start={[0, 0]}
              end={[0, 1]}
              locations={[0, 0.75]}
            />
          </ZStack>
        </Card.Background>
      </Card>
    </TouchableOpacity>
  );
};
export default Post;
