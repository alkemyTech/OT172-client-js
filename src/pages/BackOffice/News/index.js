import NewsListBackOffice from 'components/BackOffice/News/NewsList'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllNews } from 'store/slices/news'


function NewsScreenBackOffice(){
    const {news}= useSelector(state => state.news)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchAllNews())
    },[dispatch])

    return (
        <NewsListBackOffice news={news} />
    )
}

export default NewsScreenBackOffice