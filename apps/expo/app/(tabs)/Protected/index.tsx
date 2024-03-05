import { DataFetchingScreen } from "app/features/data-fetching/screen";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";

export default function Page() {
  return (
    <CoverScrollView
      title={"Protected"}
      description={"Access confidential info"}>
      <DataFetchingScreen/>
    </CoverScrollView>
  )
}
