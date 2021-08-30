import React, { useState } from 'react'
import Info from './Info';



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
            <ul>
                {persone.map((item,index) => (
                    < li key={item.id} onClick={()=>handleClick(index)}>{item.name}{show[index] ? <Info props={item}/> : ''} </li>
                ))}
            
            </ul >
        </div>
    )
}