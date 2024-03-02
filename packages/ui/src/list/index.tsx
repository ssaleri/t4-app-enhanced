import { FlashList } from '@shopify/flash-list'
import { useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  data: any[]
  renderItem: (item: any) => React.ReactElement
  itemHeight: number
}

export function VirtualList<T>({ data, renderItem, itemHeight }: Props): React.ReactNode {
  const { bottom } = useSafeAreaInsets()

  const render = useCallback(
    (item) => {
      return renderItem(item.item)
    },
    [renderItem]
  )

  return (
    <FlashList
      data={data}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: bottom + 8,
      }}
      renderItem={render}
      estimatedItemSize={itemHeight}
    />
  )
}
