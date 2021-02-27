import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  VisuallyHidden,
} from '@chakra-ui/react'
import { Link } from 'gatsby'
import Logo from 'images/svg/logo.svg'
import Menu from 'images/svg/menu.svg'
import PropTypes from 'prop-types'
import React from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import Emoji from './emoji'

const lang = 'english'
const toggleLang = () => {}

export default function Header({ navLinks, ...props }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const toggleButtons = (
    <>
      <IconButton
        aria-label="theme-mode"
        onClick={toggleLang}
        bg="transparent"
        fontSize="2xl"
        icon={
          lang === 'english' ? (
            <Emoji symbol="🇬🇧" label="England flag" />
          ) : (
            <Emoji symbol="🇨🇴" label="Colombian flag" />
          )
        }
      />
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
    </>
  )
  return (
    <Flex
      as="header"
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
        {toggleButtons}
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
        {navLinks.map((navLink, idx) => (
          <NavLink key={idx} href={navLink.uri}>
            {navLink.text}
          </NavLink>
        ))}
      </Box>
      <Box display={{ base: 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
        {toggleButtons}
      </Box>
    </Flex>
  )
}

Header.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      uri: PropTypes.string,
    }),
  ),
}

const NavLink = ({ href, children }) => (
  <Link to={href}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
)

NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
}
