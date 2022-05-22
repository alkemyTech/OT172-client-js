import React from 'react'
import CategoryCard from '../CategoryCard'
import { ButtonStyled, Head } from './styles'
import { FaPlus } from 'react-icons/fa'
import { ContainerListBackOffice } from 'common/styles'
import { useNavigate } from 'react-router-dom'

export default function CategoriesList ({ categories }) {
  const navigate = useNavigate()
  return (
    <ContainerListBackOffice>
      <h1>Categorias ( {categories.length} )</h1>
      <Head>
        <div className='name'>Nombre</div>
        <div className='actions' >
          <ButtonStyled onClick={() => navigate('new')}><FaPlus /> Agregar</ButtonStyled>
        </div>
      </Head>
      {categories?.map((c, index) => <CategoryCard key={index} category={c} />)}
    </ContainerListBackOffice>
  )
}
