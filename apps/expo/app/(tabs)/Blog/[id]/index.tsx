import { Stack } from 'expo-router'
import { createParam } from "solito";
import { ProjectScreen } from "app/features/project/screen";

const {useParam} = createParam<{ id: string }>()

export default function Screen() {

  const [id] = useParam('id')

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
        }}
      />
      <ProjectScreen />
    </>
  )
}
