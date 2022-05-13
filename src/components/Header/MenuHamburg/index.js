import React, { useRef, useState } from 'react'
import { Container } from './styles'

import FocusLock from 'react-focus-lock'
import { useOnClickOutside } from 'hooks'
import Menu from 'components/Header/MenuHamburg/Menu'
import Burger from 'components/Header/MenuHamburg/Burger'

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
