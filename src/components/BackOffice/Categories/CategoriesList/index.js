import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../CategoryCard'
import { Container, Head } from './styles'
import { FaPlus } from "react-icons/fa"


export default function CategoriesList({ categories }) {
  return (
    <Container>
      <h1>Categorias ( {categories.length} )</h1>
      <Link to={`new`}><FaPlus /> Agregar Nueva</Link>

      <Head>
        <div className='name' >Nombre</div>
        {/* <div className='description'>Descripcion</div> */}
        <div className='actions'></div>
      </Head>
      {categories?.map((c, index) => <CategoryCard key={index} category={c} />)}
    </Container>
  )
}
