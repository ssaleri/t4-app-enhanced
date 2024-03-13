import dynamic from "next/dynamic";
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SolitoImage, SolitoImageProvider } from 'solito/image'
import { Card as TamaguiCard, H2, useTheme } from '@t4/ui'
import { useLink } from 'solito/link'
import { BlogPost } from '@t4/api/src/db/tables/BlogPost'
import { Calendar, User2 } from "@tamagui/lucide-icons";
import { IconLabel } from "../../molecules/IconLabel/IconLabel";

const LinearGradient = dynamic(() => import("tamagui/linear-gradient").then(module => module.LinearGradient), {ssr: false});

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

const Card = ({item}: { item: BlogPost }) => {
  const theme = useTheme()
  const minHeight = 212

  const postLink = useLink({
    href: `/Posts/${item?.id}`,
  })

  console.log("Blog post image source: ", item?.image)

  return (
    <TouchableOpacity {...postLink}>
      <TamaguiCard
        {...shadow}
        size='$4'
        bordered
        borderRadius='$6'
        borderColor={'$gray6'}
        minHeight={minHeight}
        width={500}
      >
        <TamaguiCard.Header padded>
          <H2 color={theme.gray12.val}>{item?.title}</H2>
          {item?.author && (
            <IconLabel
              icon={<User2 size={16} />}
              label={item?.author}
              color={theme.gray12.val}
            />
          )}
          {item?.date && (<>
            <IconLabel
              icon={<Calendar size={16}/>}
              label={item?.date}
              color={theme.gray12.val}
            />
          </>)}

        </TamaguiCard.Header>
        <TamaguiCard.Background backgroundColor={theme.color6.val} borderRadius='$6'>

          <SolitoImage fill alt='Project Logo' resizeMode={'cover'}
                       src={item?.image}/>
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
