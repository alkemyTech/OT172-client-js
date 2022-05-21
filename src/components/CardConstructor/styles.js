import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  height: 100%;
  width: auto;
  flex-direction: ${props => props.isBackOffice ? 'column' : 'column'};
  align-items: center;
  gap:.7rem;
  margin: 1.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryDark};

  //border: 1px solid red;
  //background-color: blue;
  //box-shadow: 0 0 20px gray;
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  //box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: #FAFAFA; 
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, ${({ theme }) => theme.linkBorderColorHover} 0px -3px 0px inset;
  }
  `
export const Image = styled.div`
  min-height: ${props => props.isDetail ? '80vh' : '20vh'};
  height: ${props => props.isDetail ? '100%' : '200px'};
  width: ${props => props.isDetail ? '100%' : '80%'};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  //box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  margin:auto;

`
export const Titulo = styled.h1`
  font-size: 1rem;
  margin: auto ;
`
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
 // min-height: ${props => (!props.isDetail && props.isBackOffice) ? '400px' : 'auto'};
  //height: ${props => (props.isDetail && !props.isBackOffice) ? '100%' : 'auto'};
  width: ${props => (!props.isBackOffice) ? '100%' : '50%'};

`
export const Detail = styled.div`
  padding: 0 15px 0 15px;
  max-height: ${props => (props.isBackOffice) ? '300px;' : '100%;'};
  min-height: ${props => (props.isBackOffice) ? '50px;' : '100%;'};
  width: 100%;
  font-size: 1rem;
  margin: auto ;
  margin-top: 1.5rem;
  background-color:#E0E0E0;
  overflow: ${props => (props.isSeeContent) ? 'overlay' : 'hidden'};
  
  //Scrollbars styles
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #E0E0E0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`

export const Content = styled.article`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  width: 100%;
`

export const ButtonsContainer = styled.div`

  display:flex;
  gap: .4rem ;
  width: 100%;
  justify-content:center;
  align-items: center ;
  padding:50px;
  button {
    cursor:pointer;
    background: transparent;
    border:none;
    font-size: 2rem;
    color: var(--black-03);
    &:hover {
      &>svg {
        color: var(--black-03);
      }
    }
    
  }
  button.delete {
      &:hover {
        &>svg {
          color: var(--red-01);
        }
      }
    }
    button.edit {
      &:hover {
        &>svg {
          color: var(--blue-03);
        }
      }
    }
    button.see {
      &:hover {
        &>svg {
          color: var(--green-01);
        }
      }
    }
`
export const EditContainer = styled.div`
    display:flex;
    flex-direction: ${props => props.isBackOffice ? 'row' : 'column'};
    justify-content:center;
    height:100%;
    width: 100%;
`