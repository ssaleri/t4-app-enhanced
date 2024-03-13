import { H6, XStack, YStack } from "../../../index";
import Card from "../Card/Card";
import { FlatList } from "react-native";
import React from "react";
import { Container } from "../../atoms/Container/Container";

const ListHeaderComponent = (title: string) => (
  <H6 textAlign={'center'} py={'$6'}>
    {title}
  </H6>
);
export const List = ({onScroll, styles, data, title, ListEmptyComponent}) => {

  return (
    <Container>
      <FlatList
        //numColumns={2}
        onScroll={onScroll}
        ListEmptyComponent={ListEmptyComponent}
        scrollEventThrottle={16}
        ListHeaderComponent={ListHeaderComponent(title)}
        ListFooterComponent={<YStack height={'$12'}/>}
        contentContainerStyle={styles}
        data={data}
        renderItem={({item}) => <Card item={item}/>}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <XStack mt={'$4'}/>}
      />
    </Container>
  )
};
