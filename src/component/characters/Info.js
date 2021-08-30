import React from 'react'

export default function Info ({props}){
    console.log(props)
    return <div>{props.name}<img src={props.image} alt={props.name}/></div>
}