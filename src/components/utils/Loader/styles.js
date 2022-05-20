import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height:200px;
    align-items: center;
    justify-content: center;
    .spinner,.spinner:after {
      display: block;
      width: ${props => props.width || '32px'};
      height: ${props => props.height || '32px'};
      border-radius: 50%;
    }
    --line: ${props => props.line || '5px'};
    --color: ${props => props.color ? `rgb(${props.color.r},${props.color.g},${props.color.b})` : 'rgb(166,139,202)'};
    --color-left: ${props => props.color ? `rgb(${props.color.r},${props.color.g},${props.color.b}, .2)` : 'rgb(166,139,202, .2)'};
    .spinner {
      position: absolute;
      background-color: transparent;
      border-top: var(--line) solid var(--color);
      border-right: var(--line) solid var(--color);
      border-bottom: var(--line) solid var(--color);
      border-left: var(--line) solid var(--color-left);
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-duration: .8s;
      animation-name: spinner-loading;
    }
    @keyframes spinner-loading {
        0% {
            transform: rotate(0deg)
        } to {
        transform: rotate(1turn)
        }
    }
`
