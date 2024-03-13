import dynamic from "next/dynamic";
import { Paragraph, ScrollView, VirtualList, YStack } from '@t4/ui'
import React from 'react'
import Section from '@t4/ui/src/components/organisms/Section/Section'
import { ActivityIndicator } from "react-native";
import { trpc } from "app/utils/trpc";
import { match } from "ts-pattern";
import { empty, error, loading, success } from "app/utils/trpc/patterns";
import { GenericError } from "@t4/ui/src/components/molecules/GenericError/GenericError";
import { List } from "@t4/ui/src/components/organisms/List/List";


export function BlogScreen() {
  const blogPostList = trpc.blogPosts.all.useQuery()

  const blogPostListLayout = (onScroll, styles) =>
    match(blogPostList)
      .with(error, () => <GenericError message={blogPostList?.failureReason?.message}/>)
      .with(loading, () => <ActivityIndicator animating/>)
      .with(empty, () => <Paragraph>No blog posts found.</Paragraph>)
      .with(success, () => (
        <List onScroll={onScroll} styles={styles} data={blogPostList?.data} title="Tech news"/>
      ))
      .otherwise(() => <GenericError message={JSON.stringify(blogPostList?.failureReason)}/>)


  return (
    <>
      {blogPostListLayout()}
    </>
  );
}
