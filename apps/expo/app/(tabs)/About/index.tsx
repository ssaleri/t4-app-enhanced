import { AboutScreen } from 'app/features/about/screen'
import React from 'react'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import { ScrollView } from 'react-native'
import { List } from "@t4/ui/src/components/organisms/List/List";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core/index";
import { sql } from "drizzle-orm/sql/sql";

const aboutData = [
  {id: 2, title: "Who am I?", content: "ciao", author: "Simone Saleri", image: "https://picsum.photos/320/320?random=1'", date: "", tags: "[]"},
  {id: 3, title: "How is this app made?", content: "ciao", author: "Simone Saleri", image: "https://picsum.photos/320/320?random=2'", date: "", tags: "[]"},
  {id: 4, title: "test3", content: "ciao", author: "Simone Saleri", image: "https://picsum.photos/320/320?random=3'", date: "", tags: "[]"},
];

export default function Screen() {
  return (
    /*<CoverPage title={'About'} colorFrom={'$pink8'} colorTo={'$color3'}>
      {(onScroll, styles) => (
        <ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={styles}>
          <AboutScreen />
        </ScrollView>
      )}
    </CoverPage>*/
    <CoverPage title={'About'} colorFrom={'$pink8'} colorTo={'$color3'}>
      {(onScroll, styles) => (
        <List onScroll={onScroll} styles={styles} data={aboutData} title="About me" ListEmptyComponent={() => {}}/>
      )}
    </CoverPage>
  )
}
