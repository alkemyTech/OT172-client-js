import React, { useRef } from 'react'
import ButtonScrollTop from './ButtonScrollTop'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import styled from 'styled-components'


export default function ScrollToTop ({ showButtonAt }) {
  const chivatoRef = useRef()
  const [isIntersecting] = useIntersectionObserver({ elementRef: chivatoRef })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Container showButtonAt = {showButtonAt} ref={chivatoRef} />
      <ButtonScrollTop
        fill='#2c7cdc'
        height={45}
        onClick={handleClick}
        show={!isIntersecting}
        width={45}
      />
    </>
  )
}

const Container = styled.div`
  opacity: 0;
  height: 1px;
  left: 1px;
  position: absolute;
  /* ${props => props.showButtonAt && `top: ${props.showButtonAt};`} */
  top: ${props => props.showButtonAt}px;
  width: 1px;
`
