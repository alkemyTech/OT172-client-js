import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { alertToast, confirm } from 'services/alerts';
import { Card } from './styles';

export default function CardNew({ element }) {
  const [borrar, setBorrar] = useState(false)

  return (
    <Card    >
      {element.name}
      <img src={element.image} alt={element.name} height='100px' width='auto' />

    </Card>
  )
}
