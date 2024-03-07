import { Stack } from 'expo-router'
import { createParam } from "solito";
import { PostScreen } from "app/features/posts/screen";
import React, { useEffect, useRef, useState } from "react";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";
import { Animated, ScrollView } from "react-native";
import { useTheme } from '@t4/ui/src';
import { CoverPage } from "@t4/ui/src/components/templates/CoverPage/CoverPage";
import { trpc } from "app/utils/trpc";

const {useParam} = createParam<{ id: string }>()

export default function Screen() {

  const [id] = useParam('id')

  console.log(id);

  const response = trpc.blogPosts.byId.useQuery({id: id});
  const post = response?.data;

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
      <CoverPage
        title={post?.title}
        imageSrc={post?.image}
      >
        {(onScroll, styles) => (
          <ScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles}
        >
        <PostScreen post={post}/>
        </ScrollView>
        )}
      </CoverPage>
    </>
  )
}
