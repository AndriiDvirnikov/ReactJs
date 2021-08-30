import React, { useState } from 'react'
import EpisodInfo from './EpisodInfo';
export default function Episod ({episodes}){
    const [show, setShow] = useState({});
    const handleClick = (index)=>{
        setShow(episodes=>({
            ...episodes,
            [index]:!episodes[index]
        }));
    }

    return (
        <div>
            <ul>
                {episodes.map((item,index) => (
                    < li key={item.id} onClick={()=>handleClick(index)}>{item.name}{show[index] ? <EpisodInfo props={item}/> : ''} </li>
                ))}
            
            </ul >
        </div>
    )
}