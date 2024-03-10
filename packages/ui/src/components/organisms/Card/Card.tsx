import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SolitoImage } from 'solito/image'
import { Card as TamaguiCard, H2, useTheme } from '@t4/ui'
import { useLink } from 'solito/link'
import { LinearGradient } from 'tamagui/linear-gradient'
import { BlogPost } from '@t4/api/src/db/tables/BlogPost'
import { IconLabel } from '../../molecules/IconLabel/IconLabel'
import Ionicons from '@expo/vector-icons/Ionicons'

const shadow = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3,
  elevation: 5,
}
const Card = ({ item }: { item: BlogPost }) => {
  const theme = useTheme()
  const minHeight = 212

  const postLink = useLink({
    href: `/Posts/${item?.id}`,
  })

  return (
    <TouchableOpacity {...postLink}>
      <TamaguiCard
        {...shadow}
        size='$4'
        bordered
        borderRadius='$6'
        borderColor={'$gray6'}
        minHeight={minHeight}
      >
        <TamaguiCard.Header padded>
          <H2 color={theme.gray12.val}>{item?.title}</H2>
          {item?.author && (
            <IconLabel
              icon={<Ionicons size={16} name={'person-circle'} />}
              label={item?.author}
              color={theme.gray12.val}
            />
          )}
          {item?.date && (
            <IconLabel
              icon={<Ionicons size={16} name={'calendar-outline'} />}
              label={item?.date}
              color={theme.gray12.val}
            />
          )}
        </TamaguiCard.Header>
        <TamaguiCard.Background backgroundColor={theme.color6.val} borderRadius='$6'>
          <SolitoImage src={item?.image} fill alt='Project Logo' resizeMode={'cover'} />
          <LinearGradient
            height={minHeight}
            borderRadius='$4'
            colors={[theme.gray8.val, theme.backgroundTransparent.val]}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0, 1]}
          />
        </TamaguiCard.Background>
      </TamaguiCard>
    </TouchableOpacity>
  )
}
export default Card
