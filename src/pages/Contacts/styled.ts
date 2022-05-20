import { motion } from 'framer-motion'
import styled from 'styled-components'

export const WrapperContacts = styled(motion.div)``

export const Header = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1em 0;
`

export const Text = styled.p`
  width: ${({ width }: { width: string }) => width};
  margin: 0 0.5em;
  font-weight: bold;
`
