import React, { useState } from 'react'
import styled from 'styled-components';
import Info from './Info';
const CharactersHold = styled.ul `
display:flex;
flex-wrap:wrap;
flex-direction:column;
align-content: center;
`
const CharactersList = styled.li `
width: 65%;
display: flex;

img{
    width:185px;
    heigh:100%;
    margin: 0 10px 5px 0;
   
}
`


export default function Characters({ persone }) {
    
    const [show, setShow] = useState({});
    const handleClick = (index)=>{
        setShow(persone=>({
            ...persone,
            [index]:!persone[index]
        }));
    }
    return (
        <div>
            <CharactersHold>
                {persone.map((item,index) => (
                    < CharactersList key={item.id} onClick={()=>handleClick(index)}><img src={item.image} alt={item.name} />{show[index] ? <Info props={item}/> : ''} </CharactersList>
                ))}
            
            </CharactersHold >
        </div>
    )
}