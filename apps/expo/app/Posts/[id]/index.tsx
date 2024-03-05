import { Stack } from 'expo-router'
import { createParam } from "solito";
import { PostScreen } from "app/features/posts/screen";

const {useParam} = createParam<{ id: string }>()

export default function Screen() {

  const [id] = useParam('id')

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          headerBackTitle: "Back",
        }}
      />
      <PostScreen />
    </>
  )
}
