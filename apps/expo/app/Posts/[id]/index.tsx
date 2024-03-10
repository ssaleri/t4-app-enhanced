import { Stack } from 'expo-router'
import { createParam } from 'solito'
import { PostScreen } from 'app/features/posts/screen'
import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { Paragraph, useTheme } from '@t4/ui/src'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { trpc } from 'app/utils/trpc'
import { BlogPost } from '@t4/api/src/db/tables/BlogPost'
import { match } from 'ts-pattern'
import { empty, error, loading, success } from 'app/utils/trpc/patterns'
import { GenericError } from '@t4/ui/src/components/molecules/GenericError/GenericError'

const { useParam } = createParam<{ id: string }>()

export default function Screen() {
  const [id = ''] = useParam('id')
  const response = trpc.blogPosts.byId.useQuery({ id: id })
  const post = response.data || ({} as BlogPost)
  const theme = useTheme()

  const postLayout = match(response)
    .with(error, () => <GenericError message={response.failureReason?.message} />)
    .with(loading, () => <ActivityIndicator animating />)
    .with(empty, () => <Paragraph>No blog posts found.</Paragraph>)
    .with(success, () => <PostScreen post={post} />)
    .otherwise(() => <GenericError message={response.failureReason?.message} />)

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: 'Back',
          headerTintColor: theme.color12.val,
          headerTransparent: true,
        }}
      />
      <CoverPage imageSrc={post.image}>
        {(onScroll, styles) => (
          <ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={styles}>
            {postLayout}
          </ScrollView>
        )}
      </CoverPage>
    </>
  )
}
