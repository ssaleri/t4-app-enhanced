import { Stack } from 'expo-router'
import { createParam } from 'solito'
import { ProjectScreen } from 'app/features/project/screen'
import { CoverScrollView } from '@t4/ui/src/components/templates/CoverScrollView/CoverScrollView'
import { ScrollView } from 'react-native'
import { CoverPage } from '@t4/ui/src/components/templates/CoverPage/CoverPage'

const { useParam } = createParam<{ id: string }>()

export default function Screen() {
  const [id] = useParam('id')

  const projects = [
    {
      id: 1,
      title: 'Remote Work Social Platform',
      role: 'Full-stack Developer',
      description:
        'I worked on the development of a social platform for remote workers. The goal is to simplify the whole process of any project realization: you can join the platform if you are either a professional or a sponsor, the platform will guide you from the initial phase of creating the right team of professionals, to every phase of the project, reducing burocracy and time-consuming tasks (e.g. legal). The platform was built from scratch using Ruby on Rails as a full-stack framework and Bootstrap as a front-end framework. My responsibilities in this project passed through different layers, from translating clients requests into tech requirements, to the development of the platform, to the deployment and maintenance of the platform.',
      image: 'https://picsum.photos/320/320?random=1',
      technologies: ['Bootstrap', 'Ruby on Rails', 'Redis', 'PostgreSQL', 'Heroku'],
      period: '2 years',
    },
  ]

  const project = projects?.[id - 1]

  const headerColor = 'transparent' | 'white'

  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerBackTitle: 'Back',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerTransparent: true,
        }}
      />
      <CoverPage title={project?.title} imageSrc={'https://picsum.photos/320/320?random=1'}>
        {(onScroll, styles) => (
          <ScrollView onScroll={onScroll} scrollEventThrottle={16} contentContainerStyle={styles}>
            <ProjectScreen project={project} />
          </ScrollView>
        )}
      </CoverPage>
    </>
  )
}
