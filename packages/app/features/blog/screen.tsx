import { Paragraph, ScrollView, VirtualList, YStack } from '@t4/ui'
import React from 'react'
import Section from '@t4/ui/src/components/organisms/Section/Section'
import { ActivityIndicator } from "react-native";
import { trpc } from "app/utils/trpc";
import { match } from "ts-pattern";
import { empty, error, loading, success } from "app/utils/trpc/patterns";
import { GenericError } from "@t4/ui/src/components/molecules/GenericError/GenericError";


export const BlogPostItem = (item: any): React.ReactElement => {
  console.log("rest")
  return (
    <Paragraph paddingTop='$2' paddingLeft='$3' paddingBottom='$1' fontSize={16}>
      {`${item.title}`}
      ciaoooo
    </Paragraph>
  )
}

export function BlogScreen({posts}) {
  const blogPostList = trpc.blogPosts.all.useQuery()
  const blogPostListLayout = () =>
    match(blogPostList)
      .with(error, () => <GenericError message={blogPostList.failureReason?.message}/>)
      .with(loading, () => <ActivityIndicator animating/>)
      .with(empty, () => <Paragraph>No blog posts found.</Paragraph>)
      .with(success, () => {
        return (
          <VirtualList data={blogPostList.data as any[]} renderItem={BlogPostItem} itemHeight={100}/>
        )
      })
      .otherwise(() => <GenericError message={blogPostList?.failureReason?.message}/>)


  return (
    <ScrollView>
      <YStack flex={1} jc='center' ai='center' space='$4' px='$4' space='$4' pt={'$10'}>
        <Section>
          <Section.Title>Blog</Section.Title>
          <Section.Body>
            <Paragraph>This is the blog section</Paragraph>
          </Section.Body>
        </Section>

        {/*{posts?.map(post => ( <Paragraph>{post?.title}</Paragraph>))}*/}

        {blogPostListLayout}

        {/*{!!posts && (<VirtualList data={posts} renderItem={( post ) => <Paragraph>{post?.title}</Paragraph>}  itemHeight={100}/>)}*/}

        {/*<FlatList
          onScroll={()=>{}}
          ListEmptyComponent={()=>(<></>)}
          scrollEventThrottle={16}
          ListHeaderComponent={
            <H6 textAlign={'center'} py={'$6'}>
              Tech news
            </H6>
          }
          ListFooterComponent={<YStack height={'$12'} />}
          contentContainerStyle={styles}
          data={blogPostList?.data}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <XStack mt={'$4'} />}
        />*/}
      </YStack>
    </ScrollView>
  )
}
