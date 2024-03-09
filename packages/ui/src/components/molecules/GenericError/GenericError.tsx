import { Paragraph, YStack } from 'tamagui'

type Props = {
  message?: string
}

export const GenericError = ({ message }: Props): React.ReactElement => {
  return (
    <YStack jc='center' ai='center' p='$6'>
      <Paragraph pb='$3' color={'$red11'}>
        Oops! Something went wrong.
      </Paragraph>
      <Paragraph>{message}</Paragraph>
    </YStack>
  )
}
