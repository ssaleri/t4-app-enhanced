import { PropsWithChildren } from "react";
import { View } from "@t4/ui";

export const Container = ({children}: PropsWithChildren) => {
  return (
    <View marginHorizontal={"auto"} maxWidth={1200}>
      {children}
    </View>
  )
};
