import React, { useState } from 'react'
import Info from './Info';



export default function Characters({ persone }) {

    const [show, setShow] = useState(false);

    function changeShow() {
        setShow(!show);
    }

    return (
        <ul>
            {persone.map((item) => (
                < li key={item.id} onClick={() => changeShow()}>{item.name}{show ? <Info props={item}/> : 'bye'} </li>
            ))}
         
        </ul >
    )
}