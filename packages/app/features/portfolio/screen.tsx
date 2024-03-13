import React from 'react'
import { FlatList } from "react-native";
import { experiences } from "expo-app/app/(tabs)/Portfolio/Portfolio";
import { XStack } from "@t4/ui";
import { H6, YStack } from "tamagui";
import Card from "@t4/ui/src/components/organisms/Card/Card";

export const PortfolioScreen = ({onScroll, styles}) => {
  return (
    <>
      <FlatList
        onScroll={onScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <H6 textAlign={'center'} py={'$6'}>
            Tech news
          </H6>
        }
        ListFooterComponent={<YStack height={'$12'}/>}
        contentContainerStyle={styles}
        data={experiences.projects}
        renderItem={({item}) => <Card item={item}/>}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<XStack mt={'$4'}/>}
      />
    </>
  )
}
