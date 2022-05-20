import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MenuBackOffice from './MenuBackOffice'
import MenuHamburg from './MenuHamburg'
import NavBar from './NavBar'
import { Container, Logo } from './styles'

export default function Header () {
  const { list: organization } = useSelector(state => state.organization)
  const { user } = useSelector((state) => state.auth)

  return (
    <Container>
      <MenuHamburg />
      <Logo src={organization ? organization.image : ''} />
      <NavBar />
      {user?.roleId === 1
        ? <MenuBackOffice />
        : null}

    </Container>
  )
}
