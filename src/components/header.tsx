import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react'
import Logo from 'images/svg/logo.svg'
import Menu from 'images/svg/menu.svg'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import LangPicker from './lang-picker'
import Link from './link'

type Props = {}

export default function Header(props: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const { t } = useTranslation()

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Link to="/">
        <Box mr={5} color="red.600">
          <VisuallyHidden>Logo</VisuallyHidden>
          <Logo />
        </Box>
      </Link>
      <Box display={{ base: 'block', md: 'none' }}>
        <LangPicker />
        <IconButton
          aria-label="theme-mode"
          onClick={toggleColorMode}
          bg="transparent"
          icon={
            colorMode === 'light' ? (
              <RiMoonFill size={25} />
            ) : (
              <RiSunFill size={25} />
            )
          }
        />
        <Button onClick={handleToggle} bg="transparent">
          <VisuallyHidden>Open Menu</VisuallyHidden>
          <Menu />
        </Button>
      </Box>

      <Box
        as="nav"
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <NavLink href="/blog">{t('header.blog')}</NavLink>
        <NavLink href="/library">{t('header.lib')}</NavLink>
        <NavLink href="/about">{t('header.about')}</NavLink>
        <NavLink href="/projects">{t('header.projects')}</NavLink>
        <NavLink href="/contact">{t('header.contact')}</NavLink>
      </Box>
      <Box display={{ base: 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        <LangPicker />
        <IconButton
          aria-label="theme-mode"
          onClick={toggleColorMode}
          bg="transparent"
          icon={
            colorMode === 'light' ? (
              <RiMoonFill size={25} />
            ) : (
              <RiSunFill size={25} />
            )
          }
        />
      </Box>
    </Flex>
  )
}

type NavLinkProps = {
  href: string
  children: string
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link to={href}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
)
