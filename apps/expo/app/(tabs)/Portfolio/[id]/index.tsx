import { ParamsScreen } from 'app/features/params/screen'
import { Stack } from 'expo-router'
import { createParam } from "solito";

const {useParam} = createParam<{ id: string }>()

export default function Screen() {

  const [id] = useParam('id')

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          presentation: "modal"
        }}
      />
      <ParamsScreen />
    </>
  )
}
