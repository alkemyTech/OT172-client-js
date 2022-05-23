import { Button } from 'components/Forms/styles'
import React from 'react'
import toast from 'react-hot-toast'
import styled from 'styled-components'

// For simple alert call alert
export const alertToast = (type, msg) => {
  return toast[type](msg, { id: 'unasola' })
}

// Forconfirm action call confirm
export const confirm = (setState, msg) => toast((t) => (
  <Container>
    <Title>{msg}</Title>
    <ContainerBtns>
      <ButtonAlert onClick={() => {
        setState()
        toast.dismiss(t.id)
      }}
      >
        Aceptar
      </ButtonAlert>
      <ButtonAlert onClick={() => toast.dismiss(t.id)}>
        Cancelar
      </ButtonAlert>
    </ContainerBtns>
  </Container>
),
{
  duration: '2000',
  id: 'uniqueToast'
})

const Container = styled.div`
    display: block;
    width: 100% ;
    color: var(--black-01);
    padding: 1rem;
    border: 1px solid var(--black-01);
    border-radius: 10px;
  `
const Title = styled.span`
    text-align: center;
  `
const ContainerBtns = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
  `
const ButtonAlert = styled(Button)`
  font-size: .85rem ;
`
