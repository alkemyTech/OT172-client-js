import React from 'react'
import { Card, Row } from './styles'

export default function ContactCard({contact}){
  return(
    <Card>
      <Row>
        <div className="contactCard_name" >{contact.name}</div>
        <div className="contactCard_email" >{contact.email}</div>
        <div className="contactCard_phone" >{contact.phone}</div>
      </Row>
    </Card>
  )
}