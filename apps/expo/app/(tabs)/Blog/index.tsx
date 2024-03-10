import React from 'react'
import { ActivityIndicator } from 'react-native'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { Paragraph } from '@t4/ui'
import { trpc } from 'app/utils/trpc'
import { match } from 'ts-pattern'
import { empty, error, loading } from 'app/utils/trpc/patterns'
import { GenericError } from '@t4/ui/src/components/molecules/GenericError/GenericError'
import { List } from "@t4/ui/src/components/organisms/List/List";

export default function Screen() {
  const blogPostList = trpc.blogPosts.all.useQuery()

  console.log("BlogPostList: ", blogPostList);

  const blogPostListLayout = () =>
    match(blogPostList)
      .with(error, () => <GenericError message={blogPostList.failureReason?.message} />)
      .with(loading, () => <ActivityIndicator animating />)
      .with(empty, () => <Paragraph>No blog posts found.</Paragraph>)
      .otherwise(() => <GenericError message={blogPostList.failureReason?.message} />)

  return (
    <>
      <CoverPage title={'Blog'} colorFrom={'$red8'} colorTo={'$color3'}>
        {(onScroll, styles) => (
          <List onScroll={onScroll} styles={styles} data={blogPostList?.data} title="Tech news" ListEmptyComponent={blogPostListLayout}/>
        )}
      </CoverPage>
    </>
  )
}
