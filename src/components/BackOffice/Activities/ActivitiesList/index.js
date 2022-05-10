import React from 'react'
import { Link } from 'react-router-dom'
import ActivityCard from '../ActivityCard'
import { Container, Head } from './styles'
import { FaPlus } from "react-icons/fa"


export default function ActivitiesList({ activities }) {
  return (
    <Container>
      <h1>Actividades ( {activities.length} )</h1>
      <Link to={`new`}><FaPlus /> Agregar Nueva</Link>

      <Head>
        <div className='name' >Nombre</div>
        {/* <div className='description'>Descripcion</div> */}
        <div className='actions'></div>
      </Head>
      {activities?.map((c, index) => <ActivityCard key={index} activity={c} />)}
    </Container>
  )
}
