
import React from 'react'
import {Link} from 'react-router-dom'
import NewsCard from '../NewsCard'
import { Container, Head } from './styles'


export default function NewsListBackOffice({news}){
    return(
        <Container>
            <h1>News ({news.length})</h1>
            <Link to={'new'}>Agregar Nueva</Link>
            <Head>
                <div className='name' >Nombre</div>
                <div className='actions'></div>
            </Head>
            {news?.map((n,index)=> <NewsCard key= {index} myNew={n} />)}
        </Container>
    )
}