import { Button, Paragraph, YStack } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from "solito/router";
import React from "react";
import { Appearance, Dimensions, Platform } from "react-native";
import { Input, TextArea, Label, H4, ScrollView, useTheme } from "tamagui";
import { View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const {useParam} = createParam<{ id: string }>()

export const SendMessageScreen = (): React.ReactNode => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = Appearance.getColorScheme();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={{flex: 1, paddingHorizontal: 16, width: "100%"}}>
        <View style={{flex: 1, marginBottom: insets.bottom}} gap={16}>
          <H4>Send me a message</H4>

          <Label htmlFor="name" pointerEvents={"none"}>
            Full Name
          </Label>
          <Input placeholder="John Doe" autoComplete={"off"} autoCorrect={false} keyboardAppearance={colorScheme} />

          <Label htmlFor="name" pointerEvents={"none"}>
            Your email
          </Label>
          <Input placeholder="Enter your email to get an answer" keyboardAppearance={colorScheme}/>

          <Label htmlFor="name" pointerEvents={"none"}>
            Your message
          </Label>
          <TextArea size="$4" placeholder="Enter your message..." keyboardAppearance={colorScheme}/>

          <View style={{flex: 1, justifyContent: "flex-end"}}>
            <Button
              marginTop={"$6"}
              size={"$4"}
              backgroundColor={"$green9"}
              themeInverse={true}
              onPress={() => {
                Alert.alert("Message sent!")
              }}>
              Send Message
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
