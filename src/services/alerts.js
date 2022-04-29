import React from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

// For simple alert call alert
export const alert = (type, msg) => {
  return toast[type](msg)
}

  const makeConfirm = (t, setState, value) => {
    toast.dismiss(t.id)
    setState(value)
  }

// Forconfirm action call confirm
  export const confirm = (setState, value, msg) => toast((t) => (
    <Container>
      <Title>{msg}</Title>
      <ContainerBtns>
        <button onClick={() => makeConfirm(t, setState, value )}>
          Aceptar
        </button>
        <button onClick={() => toast.dismiss(t.id)}>
          Cancelar
        </button>
      </ContainerBtns>
    </Container>
  ));

  const Container = styled.div`
    display: block;
    color: #713200;
    padding: 1rem;
    border: 1px solid #713200;
    border-radius: 10px;
  `
  const Title = styled.span`
    align-text: center;
  `
  const ContainerBtns = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
  `