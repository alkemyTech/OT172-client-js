import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

// Styles
import {
  ItemStyled,
  Button,
  Repuesta
} from './styles'

export default function Item ({member}) {
  const [showItem, setShowItem] = useState(true)

  return (
    <ItemStyled>
      <div className='member'>
        <span>{member.name}</span>

        <Button onClick={() => setShowItem(!showItem)}>
          {showItem ? <FaPlus /> : <FaMinus />}
        </Button>
      </div>
      <Repuesta dangerouslySetInnerHTML={{ __html: member.description }} collapsed={showItem} />
    </ItemStyled>
  )
}
