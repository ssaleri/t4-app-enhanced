import { PortfolioScreen } from 'app/features/portfolio/screen'
import Head from 'next/head'
import { CoverPage } from "@t4/ui/src/components/templates/CoverPage/CoverPage";
import { YStack } from "@t4/ui/src";
import { AboutScreen } from "app/features/about/screen";
import React from "react";
export default function Page() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <CoverPage title={'Portfolio'} colorFrom={'$blue8'} colorTo={'$color3'}>
        {() =><YStack marginTop={300} backgroundColor={"$background"} borderTopLeftRadius={32} borderTopRightRadius={32} paddingHorizontal={16}>
          <PortfolioScreen />
        </YStack>}
      </CoverPage>
    </>
  )
}
