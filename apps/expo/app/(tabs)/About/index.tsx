import { AboutScreen } from "app/features/about/screen";
import React from "react";
import { CoverPage } from "@t4/ui/src/components/templates/CoverPage/CoverPage";
import { ScrollView } from "react-native";

export default function Screen() {
  return (
    <CoverPage
      title={"About"}
      colorFrom={"$pink8"}
      colorTo={"$color3"}
    >{(onScroll, styles) => (
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles}
      >
        <AboutScreen/>
      </ScrollView>
    )}
    </CoverPage>
  )
}
