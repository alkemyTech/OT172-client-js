import React from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

// For simple alert call alert
export const alertToast = (type, msg) => {
  return toast[type](msg,{id:'unasola'})
}

// Forconfirm action call confirm
  export const confirm = (setState, msg) => toast((t) => (
    <Container>
      <Title>{msg}</Title>
      <ContainerBtns>
        <Button onClick={()=>{
          setState()
          toast.dismiss(t.id)
        }
          }>
          Aceptar
        </Button>
        <Button onClick={() => toast.dismiss(t.id)}>
          Cancelar
        </Button>
      </ContainerBtns>
    </Container>
  ),
  {
    duration: "2000",
    id: 'uniqueToast'
  });

  const Container = styled.div`
    display: block;
    color: #713200;
    padding: 1rem;
    border: 1px solid #713200;
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
const Button = styled.button`
  cursor: pointer;
`
