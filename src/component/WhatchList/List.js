import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const ErrorStyled = styled.div`
padding: 50px;
margin-top: 10px;
border: 2px solid;
border-radius: 25px/25%;
color: #EE74E1;
`


export default function List({ del, todos, done }) {
    if (todos.length <= 0) {
        return <ErrorStyled><h1>Your list is empty</h1></ErrorStyled>
    }
    return (
        <div>
            {todos && todos.map(todo => (<ListItem
                id={todo.id}
                key={todo.id}
                title={todo.title}
                delHandler={del}
                doneHandler={done}
                done={todo.done}
            />))}
        </div>
    )
}