import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SolitoImage } from "solito/image";
import { Card, H2, useTheme } from "@t4/ui";
import { useLink } from "solito/link";
import { LinearGradient } from "tamagui/linear-gradient";
import { BlogPost } from "@t4/api/src/db/tables/BlogPost";
import { IconLabel } from "../../molecules/IconLabel/IconLabel";
import Ionicons from "@expo/vector-icons/Ionicons";

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
      <Card {...shadow} size="$4" bordered borderRadius="$6" borderColor={"$gray6"} minHeight={minHeight}>
        <Card.Header padded>
          <H2 color={theme.gray12.val}>{post?.title}</H2>
          <IconLabel icon={<Ionicons size={16} name={"person-circle"}/>} label={post.author} color={theme.gray12.val}/>
          <IconLabel icon={<Ionicons size={16} name={"calendar-outline"}/>} label={post.date} color={theme.gray12.val}/>
        </Card.Header>
        <Card.Background backgroundColor={theme.color6.val} borderRadius="$6">
          <SolitoImage
            src={post.image}
            fill
            alt='Project Logo'
            resizeMode={"cover"}
          />
          <LinearGradient
            height={minHeight}
            borderRadius="$4"
            colors={[theme.gray6.val, theme.backgroundTransparent.val]}
            start={[0, 0]}
            end={[1, 0]}
            locations={[0, 0.95, 1]}
          />
        </Card.Background>
      </Card>
    </TouchableOpacity>
  );
};
export default Post;
