import { Button, Paragraph } from '@t4/ui'
import React, { useState } from 'react'
import { Alert, Appearance, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { H4, Input, Label, ScrollView, TextArea } from 'tamagui'
import { Controller, useForm } from 'react-hook-form'
import { useKeyboard } from '@react-native-community/hooks'
import { useSheetOpen } from "app/atoms/sheet";
import { useToastController } from "@t4/ui/src";

export const SendMessageScreen = (): React.ReactNode => {
  const colorScheme = Appearance.getColorScheme()
  const keyboard = useKeyboard()
  const keyboardHeight = keyboard.keyboardHeight;
  const [isLoading, setIsLoading] = useState<boolean>();
  const [open, setOpen] = useSheetOpen()
  const toast = useToastController()

  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid, isSubmitted, isDirty, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (registrationFormParams: UserRegistration) => {
    try {
      toast.show('Message sent', {
        message: "You'll get a reply soon!",
      })
      console.log(JSON.stringify(registrationFormParams));
      setIsLoading(true);
      //await signUp(registrationFormParams);
      setOpen(false);

    } catch (error: any) {
      Alert.alert('Something went wrong', JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={{ paddingHorizontal: 16, width: '100%', paddingBottom: keyboardHeight }} space={'$4'}>
        <H4 textAlign={"center"}>🗣️ Ask me anything</H4>

        <Controller
          control={control}
          rules={{
            maxLength: {
              value: 320,
              message: 'Please insert a valid email address.',
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please insert a valid email address.',
            },
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          name='email'
          render={({ field: { onChange, value } }) => (
            <>
              <Label htmlFor='name' pointerEvents={'none'}>
                Email *
              </Label>
              <Input
                autoCapitalize={'none'}
                autoCorrect={false}
                autoComplete={'email'}
                onChangeText={onChange}
                placeholder='email@domain.com'
                value={value}
                keyboardAppearance={colorScheme}
              />
              <Paragraph color={'$red10'}>{errors?.email?.message}</Paragraph>
            </>
          )}
        />
        <Controller
          control={control}
          name='fullName'
          rules={{
            pattern: {
              value: /(( )*(\w)+)+( )*/,
              message: 'Please insert a valid first name.',
            },
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <Label htmlFor='name' pointerEvents={'none'}>
                Full Name *
              </Label>
              <Input
                autoCapitalize={'none'}
                autoCorrect={false}
                autoComplete={'name'}
                error={errors?.fullName?.message}
                onChangeText={onChange}
                placeholder='John Doe'
                value={value}
                keyboardAppearance={colorScheme}
              />
              <Paragraph color={'$red10'}>{errors?.fullName?.message}</Paragraph>
            </>
          )}
        />

        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          name='message'
          render={({ field: { onChange, value } }) => (
            <>
              <Label htmlFor='name' pointerEvents={'none'}>
                Your message *
              </Label>
              <TextArea
                size='$4'
                keyboardAppearance={colorScheme}
                autoCapitalize={'none'}
                autoCorrect={true}
                label={'Message'}
                onChangeText={onChange}
                placeholder='Enter your message...'
                value={value}
              />
              <Paragraph color={'$red10'}>{errors?.message?.message}</Paragraph>
            </>
          )}
        />

        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: keyboardHeight }}>
          <Button
            marginTop={'$6'}
            size={'$4'}
            backgroundColor={'$green9'}
            themeInverse={true}
            onPress={handleSubmit(onSubmit)}
          >
            Send Message
          </Button>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}
