
import { ContainerListBackOffice, LinkStyled } from 'common/styles'
import React from 'react'
import NewsCard from '../NewsCard'
import { FaPlus } from "react-icons/fa"




export default function NewsListBackOffice({news}){
    return(
        <ContainerListBackOffice>
            <h1>News ({news.length})</h1>
            <LinkStyled to={'new'}><FaPlus /> Agregar Novedad</LinkStyled>
            {news?.map((n,index)=> <NewsCard key= {index} myNew={n} />)}
        </ContainerListBackOffice>
    )
}