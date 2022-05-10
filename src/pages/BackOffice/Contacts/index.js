import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Contacts(){
    const { contacts }= useSelector(state => state.contacts)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch((fetchAllContacts))
    },[dispatch])
    return (
      <>
        ContactsList contacts= {contacts} />
      </>
    )
}

