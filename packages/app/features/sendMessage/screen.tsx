import { Button, Paragraph, YStack } from '@t4/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useRouter } from "solito/router";
import React from "react";
import { Dimensions, Platform } from "react-native";
import { Input, TextArea, Label, H4, ScrollView } from "tamagui";
import { View, Alert, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const {useParam} = createParam<{ id: string }>()

export const SendMessageScreen = (): React.ReactNode => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, paddingHorizontal: 16, width: "100%"}}>
        <View style={{flex: 1, marginBottom: insets.bottom}} gap={16}>
          <H4>Send me a message</H4>

          <Label htmlFor="name" pointerEvents={"none"}>
            Full Name
          </Label>
          <Input placeholder="John Doe" autoComplete={"off"} autoCorrect={false} />

          <Label htmlFor="name" pointerEvents={"none"}>
            Your email
          </Label>
          <Input placeholder="Enter your email to get an answer"/>

          <Label htmlFor="name" pointerEvents={"none"}>
            Your message
          </Label>
          <TextArea size="$4" placeholder="Enter your message..."/>

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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
