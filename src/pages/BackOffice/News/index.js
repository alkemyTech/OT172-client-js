import NewsListBackOffice from 'components/BackOffice/News/NewsList'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllNews } from 'store/slices/news'
// import News from 'components/News'
function NewsScreenBackOffice () {
  const { news } = useSelector(state => state.news)
  const dispatch = useDispatch()
  // const [myNews, setMyNews]= useState(news)

  // function handleClick () {
  //   dispatch(fetchAllNews())
  //   /* setMyNews(prevNews=>{
  //           return prevNews.concat(news)
  //       }) */
  // }

  // console.log(myNews)
  useEffect(() => {
    dispatch(fetchAllNews())
  }, [dispatch])

  return (
    <NewsListBackOffice news={news} />
  )
}

export default NewsScreenBackOffice
