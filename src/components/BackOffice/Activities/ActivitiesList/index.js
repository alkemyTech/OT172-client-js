import React from 'react'
import ActivityCard from '../ActivityCard'
import { FaPlus } from "react-icons/fa"
import { ContainerListBackOffice, LinkButtonStyled } from 'common/styles'
import { useNavigate } from 'react-router-dom'

export default function ActivitiesList({ activities }) {
  const navigate = useNavigate()
  return (
    <ContainerListBackOffice>
      <h1>Actividades ( {activities.length} )</h1>
      <LinkButtonStyled onClick={()=> navigate(`new`)}><FaPlus /> Agregar</LinkButtonStyled>

      {activities?.map((c, index) => <ActivityCard key={index} activity={c} />)}
    </ContainerListBackOffice>
  )
}
