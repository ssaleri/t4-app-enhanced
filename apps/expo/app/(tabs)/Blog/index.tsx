import React from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { Paragraph, VirtualList } from '@t4/ui'
import { trpc } from 'app/utils/trpc'
import { match } from 'ts-pattern'
import { empty, error, loading, success } from 'app/utils/trpc/patterns'
import { GenericError } from '@t4/ui/src/components/molecules/GenericError/GenericError'
import { List } from "@t4/ui/src/components/organisms/List/List";
import { CarListItem } from "@t4/ui/src/cars/CarListItem";
import { BlogScreen } from "app/features/blog/screen";
import Head from "next/head";
import { AboutScreen } from "app/features/about/screen";

export default function Screen() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <CoverPage title={'Blog'} colorFrom={'$red8'} colorTo={'$color3'}>
        {(onScroll, styles) => (
          <ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={styles}>
            <BlogScreen />
          </ScrollView>
        )}
      </CoverPage>
    </>
  )
}
