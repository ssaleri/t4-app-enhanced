import { Paragraph, Spinner, VirtualList, YStack } from '@t4/ui'
import { UpsListError } from '@t4/ui/src/ups/UpsListError'
import { UpsListItem } from '@t4/ui/src/ups/UpsListItem'
import { trpc } from 'app/utils/trpc'
import { empty, error, loading, success } from 'app/utils/trpc/patterns'
import React from 'react'
import { match } from 'ts-pattern'

export const UpsScreen = (): React.ReactNode => {
  const upsList = trpc.ups.all.useQuery()
  const upsListLayout = match(upsList)
    .with(error, () => <UpsListError message={upsList.failureReason?.message} />)
    .with(loading, () => (
      <YStack fullscreen f={1} jc='center' ai='center'>
        <Paragraph pb='$3'>Loading...</Paragraph>
        <Spinner />
      </YStack>
    ))
    .with(empty, () => <Paragraph>No ups found.</Paragraph>)
    .with(success, () => (
      <VirtualList data={upsList.data as any[]} renderItem={UpsListItem} itemHeight={80} />
    ))
    .otherwise(() => <UpsListError message={upsList.failureReason?.message} />)

  return (
    <YStack fullscreen f={1}>
      {upsListLayout}
    </YStack>
  )
}
