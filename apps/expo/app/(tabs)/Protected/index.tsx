import { DataFetchingScreen } from "app/features/data-fetching/screen";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";

export default function Page() {
  return (
    <CoverScrollView
      title={"Protected"}
      colorFrom={"$purple8"}
      colorTo={"$color3"}
    >
      <DataFetchingScreen/>
    </CoverScrollView>
  )
}
