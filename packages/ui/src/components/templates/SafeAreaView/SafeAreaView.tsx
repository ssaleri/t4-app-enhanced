import { StyleSheet, View, SafeAreaView as SafeAreaViewNative } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SafeAreaView = ({children}) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={styles(insets).container}>
      {children}
    </View>
  )
}

const styles = (insets) => StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingBottom: insets.bottom,
  },
});
