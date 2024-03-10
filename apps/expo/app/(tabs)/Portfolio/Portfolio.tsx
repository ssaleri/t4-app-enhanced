import { FlatList } from 'react-native'
import { H6 } from 'tamagui'
import { XStack, YStack } from '@t4/ui/src'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'
import React from 'react'
import Project from '@t4/ui/src/components/organisms/Project/Project'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Card from "@t4/ui/src/components/organisms/Card/Card";

const iconColor = '#484848'
const iconDimension = 24
const iconDimensionBig = 32
const iconDimensionLittle = 16

const experiences = {
  projects: [
    {
      id: '5',
      name: 'B*******',
      title: 'Luxury Watch Faces',
      image: 'https://picsum.photos/320/320?random=1',
      role: 'Mobile Software Engineer',
      startYear: '2023',
      endYear: 'current',
      description:
        'I worked as a software engineer at B*******. I was responsible for developing mobile applications for iOS and WatchOS.',
      technologies: (
        <>
          <MaterialCommunityIcons name='react' size={iconDimension} color={iconColor}/>
          <MaterialCommunityIcons
            name={'language-typescript'}
            size={iconDimension}
            color={iconColor}
          />
          <MaterialCommunityIcons name='language-swift' size={iconDimension} color={iconColor}/>
        </>
      ),
    },
    {
      id: '4',
      name: 'S*********',
      title: 'Electrical Maintenance',
      image: 'https://picsum.photos/320/320?random=2',
      role: 'Mobile Software Engineer',
      startYear: '2023',
      endYear: 'current',
      description:
        'I worked as a software engineer at S*********. I was responsible for developing mobile applications for iOS and WatchOS.',
      technologies: (
        <>
          <MaterialCommunityIcons name='react' size={iconDimension} color={iconColor}/>
          <MaterialCommunityIcons
            name={'language-typescript'}
            size={iconDimension}
            color={iconColor}
          />
          <MaterialCommunityIcons name='android' size={iconDimension} color={iconColor}/>
        </>
      ),
    },
    {
      id: '3',
      name: 'D**********',
      title: 'Ho.Re.Ca. Supply Delivery',
      image: 'https://picsum.photos/320/320?random=3',
      role: 'Mobile Software Engineer',
      startYear: '2021',
      endYear: '2023',
      description:
        'I worked as a software engineer at D**********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.',
      technologies: (
        <>
          <MaterialCommunityIcons name='react' size={iconDimension} color={iconColor}/>
          <MaterialCommunityIcons
            name={'language-typescript'}
            size={iconDimension}
            color={iconColor}
          />
          <Fontisto name='redux' size={iconDimensionLittle} color={iconColor}/>
        </>
      ),
    },
    {
      id: '2',
      name: 'S*********',
      role: 'Mobile Software Engineer',
      image: 'https://picsum.photos/320/320?random=4',
      startYear: '2019',
      endYear: '2020',
      description:
        'I worked as a software engineer at S*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.',
      title: 'Micro-mobility Gamification',
      technologies: (
        <>
          <MaterialCommunityIcons name='react' size={iconDimension} color={iconColor}/>
          <MaterialCommunityIcons
            name='language-javascript'
            size={iconDimension}
            color={iconColor}
          />
          <MaterialCommunityIcons
            name='language-ruby-on-rails'
            size={iconDimension}
            color={iconColor}
          />
        </>
      ),
    },
    {
      id: '1',
      name: 'W*********',
      role: 'Full-stack Web Engineer',
      image: 'https://picsum.photos/320/320?random=5',
      startYear: '2017',
      endYear: '2018',
      description:
        'I worked as a software engineer at W*********. I was in close relationship with Design Team and I had been responsible for developing mobile applications for iOS and Android.',
      title: 'Remote Work Social Platform',
      technologies: (
        <>
          <MaterialCommunityIcons name='bootstrap' size={iconDimension} color={iconColor}/>
          <MaterialCommunityIcons
            name='language-javascript'
            size={iconDimension}
            color={iconColor}
          />
          <MaterialCommunityIcons
            name='language-ruby-on-rails'
            size={iconDimension}
            color={iconColor}
          />
        </>
      ),
    },
  ],
}

export default function Page() {
  return (
    <CoverPage title={'Portfolio'} colorFrom={'$green8'} colorTo={'$color3'}>
      {(onScroll, styles) => (
        <FlatList
          onScroll={onScroll}
          scrollEventThrottle={16}
          ListHeaderComponent={
            <H6 textAlign={'center'} py={'$6'}>
              Tech news
            </H6>
          }
          ListFooterComponent={<YStack height={'$12'}/>}
          contentContainerStyle={styles}
          data={experiences.projects}
          renderItem={({item}) => <Card item={item}/>}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<XStack mt={'$4'}/>}
        />
      )}
    </CoverPage>
  )
}
