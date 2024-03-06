import { Stack } from 'expo-router'
import { createParam } from "solito";
import { PostScreen } from "app/features/posts/screen";
import React, { useEffect, useRef, useState } from "react";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";
import { Animated } from "react-native";
import { useTheme } from '@t4/ui/src';

const {useParam} = createParam<{ id: string }>()

export default function Screen() {

  const [id] = useParam('id')
  const post = {
    id: id,
    title: 'Post Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ex nec libero tincidunt fermentum',
    author: "Simone Saleri",
    date: "2021-10-10",
    image: "https://picsum.photos/320/320?random=1"
  }

  const headerColor = 'transparent';

  const theme = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          headerBackTitle: "Back",
          headerTintColor: theme.color12.val,
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerTransparent: true,
        }}
      />
      <CoverScrollView
        title={post?.title}
        imageSrc={"https://picsum.photos/320/320?random=1"}
      >
        <PostScreen post={post}/>
      </CoverScrollView>
    </>
  )
}
