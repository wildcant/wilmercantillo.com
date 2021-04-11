import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import {
  GrArticle,
  GrContact,
  GrProjects,
  GrResources,
  GrUser,
} from 'react-icons/gr'
import { GrIconStyles } from './generic'

type Props = {
  isLight?: boolean
  isOpen?: boolean
}

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  overflow: hidden;
  padding: 0;
  margin: 0;
`

export const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: ${(props: Props) => (props?.isLight ? '#edf2f7' : '#171923')};
  z-index: 3;
`

export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 4;
`

export const MenuWrapper = styled(motion.div)`
  z-index: 4;
`
export const Navigation = styled(motion.ul)`
  position: absolute;
  padding-left: 10%;
  top: 100px;
  list-style: none;
  z-index: 4;
`

export const NavItem = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const BlogIcon = styled(GrArticle)`
  ${GrIconStyles}
`

export const ResourcesIcon = styled(GrResources)`
  ${GrIconStyles}
`

export const ContactIcon = styled(GrContact)`
  ${GrIconStyles}
`

export const ProjectsIcon = styled(GrProjects)`
  ${GrIconStyles}
`

export const AboutIcon = styled(GrUser)`
  ${GrIconStyles}
`
