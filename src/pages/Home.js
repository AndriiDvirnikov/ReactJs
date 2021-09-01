import React from 'react'
import styled from 'styled-components'
import logo from '../images/RickandMorty.png'

const IMG = styled.img`
    width:100%;
`

export default function Home() {
    return <IMG src={logo} alt="rickandmortyLogo"/>
}