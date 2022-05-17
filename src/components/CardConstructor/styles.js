import styled from 'styled-components'
import { mediaQueries } from 'config/responsive'
const { screenLittle, screenBig } = mediaQueries

export const Container = styled.article`
  display: flex;
  height: 100%;

  width: auto;
  flex-direction: ${props => props.isBackOffice ? 'row-reverse' : 'column'};
  align-items: center;
  gap:.7rem;
  margin: 1.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryDark};
  border: ${props => props.isBackOffice ? '2px solid var(--gray-02)': 'none'};

`
export const Image = styled.div`
  min-height: 400px;
  height: ${props => props.isDetail ? '100%' : '200px'};
  width: ${props => props.isDetail ? '100%' : '50%'};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
`
export const Titulo = styled.h1`
  font-size: 1rem;
  margin: auto ;
`
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  min-height: ${props => (!props.isDetail && props.isBackOffice) ? '400px' : 'auto'};
  height: ${props => (props.isDetail && !props.isBackOffice) ? '100%' : 'auto'};
  width: 50% ;
  margin: auto ;
  align-items: flex-start;
`
export const Detail = styled.div`
  height: 300px;
  width: 100%;
  font-size: 1rem;
  margin: auto ;
  margin-top: 1.5rem;
  
  color: ${props => (props.isSeeContent) ? 'var(--white-03);' : 'var(--black-03);'};

  ${props => (!props.isSeeContent) && 'white-space: nowrap;'}
  ${props => (props.isSeeContent) && 'background-color: var(--black-01);'}

  overflow: ${props => (props.isSeeContent) ? 'overlay' : 'hidden'};
  text-overflow: ellipsis;
  transition: all .3s linear;
`

export const Content = styled.article`
  align-self: center;
  padding: 1rem;
  width: 100%;
`


export const ButtonsContainer = styled.div`
  display:flex;
  gap: .4rem ;
  width: 100%;
  justify-content:flex-end;
  align-items: center ;
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