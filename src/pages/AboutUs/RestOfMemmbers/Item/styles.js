import styled from 'styled-components'

export const ItemStyled = styled.section`
    &>div.member{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .4rem 0;

        &>span {
            padding-right: 64px;
            font-size: 1.2rem;
            font-weight: 700;
        }
        &>svg {
            flex-shrink: 0;
            width: 20px;
            height: 20px;
        }
    }
`
export const Button = styled.button`
    background: transparent;
    cursor: pointer;
    color: var(--black-01);

    border: none;
    height: 25px;
    width: 25px;
    &:hover{
            color: var(--blue-02);
    }
    &>svg {
        flex-shrink: 0;
        width: 20px;
        height: 20px;
    }
`
export const Repuesta = styled.div`
    line-height: 1.5rem;
    padding: 24px 0;

    ${(props) =>
        props.collapsed &&
        `
        height: 0;
        border: 1px solid transparent;
        margin-bottom: -2px;
        transition: all 1.5s ease;
        pointer-events: none;
        display:none;
  `}
`
