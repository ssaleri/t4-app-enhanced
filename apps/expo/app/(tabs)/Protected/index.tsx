import { DataFetchingScreen } from 'app/features/data-fetching/screen'
import { ScrollView } from 'react-native'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { useToastController } from '@t4/ui/src'
import React from 'react'

export default function Page() {
  return (
    <CoverPage title={'Protected'} colorFrom={'$purple8'} colorTo={'$color3'}>
      {(onScroll, styles) => (
        <ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={styles}>
          <DataFetchingScreen />
        </ScrollView>
      )}
    </CoverPage>
  )
}
