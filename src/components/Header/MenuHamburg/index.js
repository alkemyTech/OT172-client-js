import React, { useRef, useState } from 'react'
import { Container } from './styles'

import FocusLock from 'react-focus-lock'
import { Burger, Menu } from 'components/utils'
import { useOnClickOutside } from 'hooks'

export default function MenuHamburg() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
        <Container ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </Container> 
  )
}
