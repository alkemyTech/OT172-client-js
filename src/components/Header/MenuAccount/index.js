import React, { useRef, useState } from 'react'
import { Container } from './styles'

import FocusLock from 'react-focus-lock'
import { useOnClickOutside } from 'hooks'
import Menu from './Menu'
import MenuIcon from './MenuIcon'

export default function MenuAccount () {
  const [open, setOpen] = useState(false)
  const nodebo = useRef()
  const menuId = 'main-menu'

  useOnClickOutside(nodebo, () => setOpen(false))

  return (
    <Container ref={nodebo}>
      <FocusLock disabled={!open}>
        <MenuIcon open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </Container>
  )
}
