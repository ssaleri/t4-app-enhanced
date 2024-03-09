import { StyleSheet, View, SafeAreaView as SafeAreaViewNative } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SafeAreaView = ({ children, bc, flex }) => {
  const insets = useSafeAreaInsets()
  return <View style={styles(insets, bc, flex).container}>{children}</View>
}

const styles = (insets, bc) =>
  StyleSheet.create({
    container: {
      backgroundColor: bc,
      flex: 1,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
  })
