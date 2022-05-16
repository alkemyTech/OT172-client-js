import React from 'react'
import ActivityCard from '../ActivityCard'
import { Head } from './styles'
import { FaPlus } from "react-icons/fa"
import { ContainerListBackOffice, LinkStyled } from 'common/styles'

export default function ActivitiesList({ activities }) {
  return (
    <ContainerListBackOffice>
      <h1>Actividades ( {activities.length} )</h1>
      <LinkStyled to={`new`}><FaPlus /> Agregar Nueva</LinkStyled>
      {activities?.map((c, index) => <ActivityCard key={index} activity={c} />)}
    </ContainerListBackOffice>
  )
}
