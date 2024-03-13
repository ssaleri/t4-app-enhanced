import * as React from 'react'
import { isClient, XStack } from 'tamagui'
import { Anchor, Button } from '@t4/ui'
import { Linking } from 'react-native'
import { ThemeToggle } from '@t4/ui/src/ThemeToggle'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'
import Link from "next/link";
import { useSheetOpen } from "app/atoms/sheet";
import { Sheet } from "@t4/ui/src";
import { ChevronDown } from "@tamagui/lucide-icons";
import { SendMessageScreen } from "app/features/sendMessage/screen";
import { useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [open, setOpen] = useSheetOpen()
  const [position, setPosition] = useState(0)

  const homeLink = useLink({
    href: '/',
  })

  const links = [
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
      <XStack ai={'center'} jc='space-between' p={'$2'} position={"fixed"} zIndex={999} width={"100%"} backgroundColor={"$background"}>
        <Link href="/" >
          <SolitoImage {...homeLink} src='/brand-logo-icon.svg' width={32} height={32} alt='Website Logo' />
        </Link>

        <XStack jc='space-between' ai='center' space='$2'>
          {links.map((link) => (
            <Button key={link.label}{...link.props}>{link.label}</Button>
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

        <Button onPress={() => setOpen((x) => !x)} space='$2'>
          Bottom Sheet
        </Button>
        <Sheet
          modal
          open={open}
          onOpenChange={setOpen}
          snapPoints={[90]}
          position={position}
          onPositionChange={setPosition}
          dismissOnSnapToBottom
          disableDrag
        >
          <Sheet.Overlay />
          <Sheet.Frame alignItems='center' justifyContent='flex-start'>
            <Sheet.Handle />
            <Button
              transparent={true}
              size='$4'
              circular
              icon={ChevronDown}
              onPress={() => {
                setOpen(false)
              }}
            />
            <SendMessageScreen />
          </Sheet.Frame>
        </Sheet>

      </XStack>
    </>
  )
}
