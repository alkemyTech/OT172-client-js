import NewsListBackOffice from 'components/BackOffice/News/NewsList'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllNews } from 'store/slices/news'
import { Button } from 'components/Forms/styles'
import News from 'components/News'
function NewsScreenBackOffice(){
    const {news}= useSelector(state => state.news)
    const dispatch = useDispatch()
    //const [myNews, setMyNews]= useState(news)

    function handleClick(){
        dispatch(fetchAllNews())
        /*setMyNews(prevNews=>{
            return prevNews.concat(news)
        })*/
    }
   // console.log(myNews)
    useEffect(()=>{
        dispatch(fetchAllNews(5))
    },[dispatch])

    return (
        <div>
        <NewsListBackOffice news={news} />
        {/*<Button onClick={handleClick}>Cargar mas</Button>*/}
        </div>

    )
}

export default NewsScreenBackOffice