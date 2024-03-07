import React from "react";
import Post from "@t4/ui/src/components/organisms/Post/Post";
import { ActivityIndicator, FlatList } from "react-native";
import { CoverPage } from "@t4/ui/src/components/templates/CoverPage/CoverPage";
import { H6, Paragraph, XStack, YStack } from "@t4/ui";
import { trpc } from "app/utils/trpc";
import { match } from "ts-pattern";
import { empty, error, loading } from "app/utils/trpc/patterns";
import { GenericError } from "@t4/ui/src/components/molecules/GenericError/GenericError";

export default function Screen() {
  const blogPostList = trpc.blogPosts.all.useQuery()

  const blogPostListLayout = () => match(blogPostList)
    .with(error, () => <GenericError message={blogPostList.failureReason?.message}/>)
    .with(loading, () => (
      <ActivityIndicator animating/>
    ))
    .with(empty, () => <Paragraph>No blog posts found.</Paragraph>)
    .otherwise(() => <GenericError message={blogPostList.failureReason?.message}/>)

  return (
    <>
      <CoverPage
        title={"Blog"}
        colorFrom={"$blue8"}
        colorTo={"$color3"}
      >{(onScroll, styles) => (
        <FlatList
          onScroll={onScroll}
          ListEmptyComponent={blogPostListLayout}
          scrollEventThrottle={16}
          ListHeaderComponent={<H6 textAlign={"center"} py={"$6"}>Tech news</H6>}
          ListFooterComponent={<YStack height={"$12"}/>}
          contentContainerStyle={styles}
          data={blogPostList?.data}
          renderItem={({item}) => <Post post={item}/>}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <XStack mt={"$4"}/>}
        />
      )}
      </CoverPage>
    </>
  )
}
