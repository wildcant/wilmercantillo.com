import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { NavLink } from 'components/header'
import { motion, SVGMotionProps, Variants } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  AboutIcon,
  Background,
  BlogIcon,
  ContactIcon,
  Container,
  Nav,
  Navigation,
  NavItem,
  ProjectsIcon,
  ResourcesIcon,
} from './styled/sidebarStyled'

const Path = (
  props: SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

type MenuToggleProps = {
  toggle: () => void
  color: string
}

export const MenuToggle = ({ toggle, color }: MenuToggleProps) => (
  <IconButton aria-label="menu" onClick={toggle} color={color}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </IconButton>
)

const backgroundAnimation: Variants = {
  open: {
    clipPath: `circle(2200px at 100vw 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0px at 100vw 0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      delay: 0.4,
    },
  },
}

const navAnimation: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
      delay: 0.2,
    },
    display: 'block',
  },
  closed: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
      delay: 0.6,
    },
    display: 'none',
  },
}

const menuItemAnimation: Variants = {
  open: { x: -10, opacity: 1 },
  closed: { x: 0, opacity: 0 },
}

type SideBarProps = {
  isOpen: boolean
  isLight: boolean
}

const SideBar = ({ isOpen, isLight }: SideBarProps) => {
  const { t } = useTranslation()

  const navItems = [
    { to: '/blog', icon: BlogIcon, text: t('header.blog') },
    { to: '/resources', icon: ResourcesIcon, text: t('header.res') },
    { to: '/about', icon: AboutIcon, text: t('header.about') },
    { to: '/projects', icon: ProjectsIcon, text: t('header.projects') },
    { to: '/contact', icon: ContactIcon, text: t('header.contact') },
  ]

  return (
    <Container>
      <Nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <Background variants={backgroundAnimation} isLight={isLight} />

        <Navigation variants={navAnimation}>
          {navItems.map(({ to, text, icon }, idx) => (
            <NavItem key={idx} variants={menuItemAnimation} custom={idx}>
              <NavLink href={to}>
                <Icon
                  as={icon}
                  color={isLight ? 'primary.500' : 'purple.500'}
                />{' '}
                {text}
              </NavLink>
            </NavItem>
          ))}
        </Navigation>
      </Nav>
    </Container>
  )
}
export default SideBar
