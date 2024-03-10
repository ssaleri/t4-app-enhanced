import React from 'react'
import { ActivityIndicator } from 'react-native'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { Paragraph, VirtualList } from '@t4/ui'
import { trpc } from 'app/utils/trpc'
import { match } from 'ts-pattern'
import { empty, error, loading, success } from 'app/utils/trpc/patterns'
import { GenericError } from '@t4/ui/src/components/molecules/GenericError/GenericError'
import { List } from "@t4/ui/src/components/organisms/List/List";
import { CarListItem } from "@t4/ui/src/cars/CarListItem";

export default function Screen() {
  const blogPostList = trpc.blogPosts.all.useQuery()

  console.log("BlogPostList: ", blogPostList);

  const blogPostListLayout = (onScroll, styles) =>
    match(blogPostList)
      .with(error, () => <GenericError message={JSON.stringify(blogPostList?.failureReason)}/>)
      .with(loading, () => <ActivityIndicator animating/>)
      .with(empty, () => <Paragraph>No blog posts found.</Paragraph>)
      .with(success, () => (
        <List onScroll={onScroll} styles={styles} data={blogPostList?.data} title="Tech news"
              ListEmptyComponent={blogPostListLayout}/>
      ))
      .otherwise(() => <GenericError message={JSON.stringify(blogPostList?.failureReason)}/>)

  return (
    <>
      <CoverPage title={'Blog'} colorFrom={'$red8'} colorTo={'$color3'}>
        {(onScroll, styles) => (
          blogPostListLayout(onScroll, styles)
        )}
      </CoverPage>
    </>
  )
}
