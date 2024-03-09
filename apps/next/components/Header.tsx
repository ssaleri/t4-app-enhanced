import * as React from 'react'
import { isClient, XStack } from 'tamagui'
import { Anchor, Button } from '@t4/ui'
import { Linking } from 'react-native'
import { ThemeToggle } from '@t4/ui/src/ThemeToggle'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  const portfolioLink = useLink({
    href: '/portfolio',
  })

  const links = [
    { label: 'Home', href: '/', props: useLink({ href: '/' }) },
    { label: 'Blog', href: '/', props: useLink({ href: '/blog' }) },
    { label: 'About', href: '/about', props: useLink({ href: '/about' }) },
    { label: 'Portfolio', href: '/portfolio', props: useLink({ href: '/portfolio' }) },
    { label: 'Contact', href: '/contact', props: useLink({ href: '/contact' }) },
  ]

  if (isClient) {
    React.useEffect(() => {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 30)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [])
  }

  return (
    <>
      <XStack ai={'center'} jc='space-between' p={'$2'}>
        <SolitoImage src='/brand-logo-icon.svg' width={32} height={32} alt='Website Logo' />

        <XStack jc='space-between' ai='center' space='$2'>
          {links.map((link) => (
            <Button {...link.props}>{link.label}</Button>
          ))}
          <Button
            space={'$2'}
            backgroundColor={'$blue6'}
            onPress={() => Linking.openURL('mailto:simone@test.it')}
          >
            Hire me! 🚀
          </Button>
        </XStack>

        <ThemeToggle />
      </XStack>
    </>
  )
}
