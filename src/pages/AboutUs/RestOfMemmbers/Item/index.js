import { UnitImg } from 'pages/AboutUs/styles'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

// Styles
import {
  ItemStyled,
  Button,
  Repuesta
} from './styles'

export default function Item({ member }) {
  const [showItem, setShowItem] = useState(true)

  return (
    <ItemStyled>
      <div className='member'>
        <span>{member.name}</span>

        <Button onClick={() => setShowItem(!showItem)}>
          {showItem ? <FaPlus /> : <FaMinus />}
        </Button>
      </div>
      <Repuesta collapsed={showItem}>
        {( member.image !== null) &&
        <UnitImg src={member.image} alt='' />
      }
        <span dangerouslySetInnerHTML={{ __html: member.description }}></span>
      </Repuesta>
    </ItemStyled>
  )
}
