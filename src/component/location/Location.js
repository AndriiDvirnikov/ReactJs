import React, { useState } from 'react'
import LocationInfo from './LocationInfo';
export default function Location ({dimension}){
    const [show, setShow] = useState({});
    const handleClick = (index)=>{
        setShow(dimension=>({
            ...dimension,
            [index]:!dimension[index]
        }));
    }

    return (
        <div>
            <ul>
                {dimension.map((item,index) => (
                    < li key={item.id} onClick={()=>handleClick(index)}>{item.name}{show[index] ? <LocationInfo props={item}/> : ''} </li>
                ))}
            
            </ul >
        </div>
    )
}