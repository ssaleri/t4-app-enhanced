import { H6, XStack, YStack } from "../../../index";
import Card from "../Card/Card";
import { FlatList } from "react-native";
import React from "react";

const ListHeaderComponent = (title: string) => (
  <H6 textAlign={'center'} py={'$6'}>
    {title}
  </H6>
);
export const List = ({onScroll, styles, data, title, ListEmptyComponent}) => {

  return (
    <FlatList
      onScroll={onScroll}
      ListEmptyComponent={ListEmptyComponent}
      scrollEventThrottle={16}
      ListHeaderComponent={ListHeaderComponent(title)}
      ListFooterComponent={<YStack height={'$12'} />}
      contentContainerStyle={styles}
      data={data}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <XStack mt={'$4'} />}
    />
  )
};
