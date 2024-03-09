import { DataFetchingScreen } from 'app/features/data-fetching/screen'
import { CoverScrollView } from '@t4/ui/src/components/templates/CoverScrollView/CoverScrollView'
import { ScrollView } from 'react-native'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { Button, useToastController, YStack } from '@t4/ui/src'
import React from 'react'

export default function Page() {
  const toast = useToastController()

  return (
    <CoverPage title={'Protected'} colorFrom={'$purple8'} colorTo={'$color3'}>
      {(onScroll, styles) => (
        <ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={styles}>
          <DataFetchingScreen />

          <Button
            onPress={() => {
              toast.show('Hello world!', {
                message: 'Description here',
              })
            }}
          >
            Show Toast
          </Button>
        </ScrollView>
      )}
    </CoverPage>
  )
}
