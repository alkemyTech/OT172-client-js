import React from 'react'
import CategoryCard from '../CategoryCard'
import { Head } from './styles'
import { FaPlus } from "react-icons/fa"
import { ContainerListBackOffice, LinkStyled } from 'common/styles'


export default function CategoriesList({ categories }) {
  return (
    <ContainerListBackOffice>
      <h1>Categorias ( {categories.length} )</h1>
      <LinkStyled to={`new`}><FaPlus /> Agregar Nueva</LinkStyled>

      <Head>
        <div className='name' >Nombre</div>
        {/* <div className='description'>Descripcion</div> */}
        <div className='actions'></div>
      </Head>
      {categories?.map((c, index) => <CategoryCard key={index} category={c} />)}
    </ContainerListBackOffice>
  )
}
