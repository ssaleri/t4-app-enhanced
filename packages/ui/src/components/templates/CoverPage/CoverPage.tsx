import { Animated, Dimensions, Platform, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'tamagui'
import { useHeaderHeight } from '@react-navigation/elements'
import { CoverPageType } from 'app/models/CoverPage'
import { Cover } from "../../organisms/Cover/Cover";
import React, { useEffect, useRef, useState } from 'react'
import { Title } from "../../atoms/typography/Title/Title";
import { isWeb } from "app/utils/device";

export const CoverPage = ({title, children, colorFrom, imageSrc}: CoverPageType) => {
  const insets = useSafeAreaInsets()
  const windowHeight = Dimensions.get('window').height
  const oneFourthHeight = windowHeight / 4
  const theme = useTheme()
  const isWeb = Platform.OS == "web";

  const [headerShown, setHeaderShown] = useState(false)
  const translation = useRef(new Animated.Value(-100)).current
  const headerHeight = (isWeb ? 0 : (useHeaderHeight() || insets?.top || 0));

  const onScroll = (event) => {
    const scrolling = event.nativeEvent.contentOffset.y
    if (scrolling > 100) {
      setHeaderShown(true)
    } else {
      setHeaderShown(false)
    }
  }

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [headerShown])

  const params = {insets, oneFourthHeight, headerHeight, translation, theme}

  return (
    <>
      <Animated.View style={stylesWithParams(params).animatedHeader}/>

      <View style={styles.headerSection}>
        <Cover colorFrom={colorFrom} imageSrc={imageSrc}/>

        <View style={stylesWithParams(params).headerTitle}>
          <Title>{title}</Title>
        </View>
      </View>

      {isWeb ? children() : children(onScroll, stylesWithParams(params).container)}
    </>
  )
}

const borderRadius = 16
const stylesWithParams = ({insets, oneFourthHeight, headerHeight, translation, theme}) =>
  StyleSheet.create({
    animatedHeader: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      height: headerHeight,
      backgroundColor: theme?.color3?.val,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.1)',
      opacity: translation?.interpolate({
        inputRange: [-100, 0],
        outputRange: [0, 1],
      }),
    },
    headerTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: isWeb ? 70 : (insets?.top || 16),
      width: '100%',
      height: oneFourthHeight - insets?.top - borderRadius,
    },
    container: {
      backgroundColor: theme?.background?.val,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 200,
      marginTop: oneFourthHeight - borderRadius || 0,
      borderTopLeftRadius: borderRadius || 0,
      borderTopRightRadius: borderRadius || 0,
      minHeight: '100%',
    },
  })

const styles = StyleSheet.create({
  headerSection: {
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
  },
})
