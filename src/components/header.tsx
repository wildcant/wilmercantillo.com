import {
  Box,
  Flex,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react'
import { useCycle } from 'framer-motion'
import Logo from 'images/svg/logo.svg'
import React, { createRef, ReactNode, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { useLockBodyScroll, useWindowScroll } from 'react-use'
import LangPicker from './lang-picker'
import Link from './link'
import SideBar, { MenuToggle } from './sidebar'
import { ComponentSizer } from './styled/generic'
import { MenuWrapper } from './styled/sidebarStyled'

type HeaderProps = {
  pathname?: string
}

const delta = 5
export default function Header({ pathname }: HeaderProps) {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const [showHeader, setShowHeader] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isOpen, toggleOpen] = useCycle(false, true)
  useLockBodyScroll(isOpen)
  const { y } = useWindowScroll()
  const lastPosition = useRef(0)

  const header = createRef<HTMLDivElement>()
  const isLight = colorMode === 'light'

  const navItems = [
    { to: '/blog', text: t('header.blog') },
    { to: '/resources', text: t('header.res') },
    { to: '/about', text: t('header.about') },
    { to: '/projects', text: t('header.projects') },
    { to: '/contact', text: t('header.contact') },
  ]

  useEffect(() => {
    if (header.current) {
      setHeaderHeight(header.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    if (Math.abs(lastPosition.current - y) <= delta) return
    if (y > lastPosition.current && y > headerHeight) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }
    lastPosition.current = y
  }, [y])

  return (
    <Box
      as="div"
      ref={header}
      position="fixed"
      zIndex={2}
      width="100%"
      height="10vh"
      minHeight="60px"
      transition="top 0.2s ease-in-out"
      boxShadow={y > headerHeight ? 'lg' : ''}
      top={showHeader ? 0 : -headerHeight}
      backgroundColor={isLight ? 'white' : 'gray.800'}
    >
      <ComponentSizer>
        <Flex wrap="wrap" align="center" justify="space-between">
          <Box zIndex={5}>
            <Link to="/">
              <Box color={isLight ? 'primary.500' : 'purple.500'}>
                <VisuallyHidden>Logo</VisuallyHidden>
                <Logo />
              </Box>
            </Link>
          </Box>
          <Box display={{ base: 'flex', md: 'none' }}>
            <Box zIndex={2}>
              <LangPicker />
            </Box>
            <Box zIndex={2}>
              <Tooltip
                label={isLight ? t('general.darkMode') : t('general.lightMode')}
                aria-label="toggle-theme"
              >
                <IconButton
                  aria-label="theme-mode"
                  onClick={toggleColorMode}
                  bg="transparent"
                  icon={
                    isLight ? <RiMoonFill size={25} /> : <RiSunFill size={25} />
                  }
                />
              </Tooltip>
            </Box>
            <MenuWrapper animate={isOpen ? 'open' : 'closed'}>
              <MenuToggle
                toggle={() => toggleOpen()}
                color={isLight ? 'primary.500' : 'purple.500'}
              />
            </MenuWrapper>
          </Box>

          <Box
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
          >
            {navItems.map(({ to, text }, idx) => (
              <NavLink
                key={idx}
                href={to}
                isLight={isLight}
                active={pathname === to}
              >
                {text}
              </NavLink>
            ))}
          </Box>
          <Box display={{ base: 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
            <LangPicker />
            <Tooltip
              label={isLight ? t('general.darkMode') : t('general.lightMode')}
              aria-label="toggle-theme"
            >
              <IconButton
                aria-label="theme-mode"
                onClick={toggleColorMode}
                bg="transparent"
                icon={
                  isLight ? <RiMoonFill size={25} /> : <RiSunFill size={25} />
                }
              />
            </Tooltip>
          </Box>
        </Flex>
      </ComponentSizer>
      <Box display={{ md: 'none' }}>
        <SideBar
          isOpen={isOpen}
          isLight={isLight}
          pathname={pathname}
          navItems={navItems}
        />
      </Box>
    </Box>
  )
}

type NavLinkProps = {
  href: string
  children: string | ReactNode
  active: boolean
  isLight: boolean
}

export const NavLink = ({ href, children, isLight, active }: NavLinkProps) => {
  return (
    <Link to={href}>
      <Text
        mt={['4', '0']}
        ml={{ md: 6 }}
        display="block"
        fontSize="xl"
        color={active ? (isLight ? 'primary.500' : 'purple.500') : ''}
        fontWeight={active ? 'bold' : 'normal'}
      >
        {children}
      </Text>
    </Link>
  )
}
