import { AboutScreen } from "app/features/about/screen";
import { CoverList } from "@t4/ui/src/components/templates/CoverList/CoverList";
import Post from "@t4/ui/src/components/organisms/Post/Post";
import React from "react";
import { CoverScrollView } from "@t4/ui/src/components/templates/CoverScrollView/CoverScrollView";
import { Button, H3, useToastController, YStack } from "@t4/ui/src";
import { trpc } from "app/utils/trpc";
import { useSupabase } from "app/utils/supabase/hooks/useSupabase";
import { useLink } from "solito/link";

export default function Screen() {
  return (
    <CoverScrollView
      title={"About"}
      description={"Some info about me"}
    >
      <AboutScreen/>
    </CoverScrollView>
  )
}
