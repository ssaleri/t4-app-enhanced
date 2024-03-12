import { AboutScreen } from 'app/features/about/screen'
import Head from 'next/head'
import React from "react";
import { CoverPage } from "@t4/ui/src/components/templates/CoverPage/CoverPage";
import { YStack } from '@t4/ui'

export default function Page() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <CoverPage title={'About'} colorFrom={'$blue8'} colorTo={'$color3'}>
        {() =><YStack marginTop={300} backgroundColor={"$background"} borderTopLeftRadius={32} borderTopRightRadius={32} paddingHorizontal={16}>
          <AboutScreen />
        </YStack>}
      </CoverPage>
    </>
  )
}
