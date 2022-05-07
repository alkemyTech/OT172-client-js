import React from 'react'
import CategoryCard from '../CategoryCard'
import { Container, Head } from './styles'

export default function CategoriesList({ categories }) {
  return (
    <Container>
      <h1>Categorias ( {categories.length} )</h1>
      <Head>
        <div className='name' >Nombre</div>
        {/* <div className='description'>Descripcion</div> */}
        <div className='actions'></div>
      </Head>
      {categories?.map((c, index) => <CategoryCard key={index} category={c} />)}
    </Container>
  )
}
