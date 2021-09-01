import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
 const MenuHold = styled.ul `

 list-style: none;
 display:flex;
 justify-content: center;
 padding:0;
 `

const MenuButton = styled.li`
cursor: pointer;
font-size: 18px;
font-weight: 900;
background-color: #FEE140;
color: #EE74E1;
padding: 1.25rem 2rem;
margin-right:5px;
border-radius: 25px/50%;
text-transform: uppercase;
transition: all 330ms;
&:hover{
  background-color: #3EECAC;
  a{
    color:#EE74E1;
  }
}
a{
  color:#EE74E1;
}
`

function Menu() {
  return <MenuHold>
    
    <MenuButton><Link to="/characters">Characters</Link> </MenuButton>
    <MenuButton><Link to="/episode">Episode</Link></MenuButton>
    <MenuButton><Link to="/location">Location</Link></MenuButton>
  </MenuHold>
}
export default Menu