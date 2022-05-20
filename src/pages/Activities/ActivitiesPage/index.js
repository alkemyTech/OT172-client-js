import ActivitiesList from 'components/Activities/ActivitiesList'
import React from 'react'
import { Container } from './styles'

function ActivitiesPage () {
  return (
    <Container>
      <ActivitiesList qty='all' title='Todas las Actividades' />
    </Container>
  )
}

export default ActivitiesPage
