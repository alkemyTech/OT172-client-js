
import React from 'react'

import Item from './Item'

// Styles
import {
  RestOfMemmbersSection,
  RestOfMemmbersSectionHeader,
  RestOfMemmbersSectionContent,
  RestOfMemmbersSectionFooter
} from './styles'

import { integrantes } from 'config/const'
import { Wrapper } from '../styles'

export default function RestOfMemmbers({members}) {

  return (
    <RestOfMemmbersSection>
      <RestOfMemmbersSectionHeader>
        <div>
          <hr />
          <h2>Miembros</h2>
          <hr />
        </div>
      </RestOfMemmbersSectionHeader>
      <RestOfMemmbersSectionContent>
        {members.map((e, i) => <Item key={i} member={e} />)}
      </RestOfMemmbersSectionContent>
      <RestOfMemmbersSectionFooter />
    </RestOfMemmbersSection>
  )
}
