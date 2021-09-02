import React from 'react'
import styled from 'styled-components'

const ListStyled = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 0px;
border-bottom: 1px solid;
transition: all 330ms;
`
const ButtonHoldStyled = styled.div`
cursor: pointer;
font-size: 18px;
font-weight: 900;
`

const TitleSyiled = styled.div`
font-size: 18px;
font-weight: 900;
color: #EE74E1;
text-transform: uppercase;
-webkit-transition: all 330ms;
transition: all 330ms;
padding-top: 20px;
`
const Button = styled.button`
width: 75px;
color: #EE74E1;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #FEE140;
border-radius: 10px/40%;
background-color: #FEE140;
font-weight: 900;
transition: all 330ms;
&:hover{
    background-color: #3EECAC;
      color:#EE74E1;
  }
`;

export default function ListItem({ id, title, delHandler, doneHandler, done }) {
    return (
        <ListStyled className={done ? `bg-success` : ''}>
            <TitleSyiled>{done ? <del>{title}</del> : title}</TitleSyiled>
            <ButtonHoldStyled>
                <Button onClick={() => delHandler(id)}>del</Button>
                <Button onClick={() => doneHandler(id)}>{done ? "♥" : "done"}</Button>
            </ButtonHoldStyled>
        </ListStyled>
    )
}