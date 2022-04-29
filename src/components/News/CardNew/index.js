import React, { useState } from 'react'
import { alert, confirm } from 'services/alerts';
import { Card } from './styles';

export default function CardNew( {element} ) {
  const [borrar, setBorrar] = useState(false)
  return (
    <Card>
      {element.name}
      <img src={element.image} alt={element.name} height='100px' width='auto'/>

      {/* Solo para probar el servicio de alertas, cuando se implemente borrar. */}
      <button onClick={() => alert('error', 'Mensaje de error o lo que sea')}>alerta</button>
      <button onClick={() => confirm(setBorrar, !borrar, 'Desea modificar el estado')}>{borrar ? 'DesBorrar' : 'Borrar'}</button>
      {/* Solo para probar el servicio de alertas, cuando se implemente borrar. */}

    
    </Card>
  )
}
