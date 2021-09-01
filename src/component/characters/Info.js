import React from 'react'

export default function Info({ props }) {
    return <div>
        
        <div>
            <h3>Profile</h3>
            <p>Name : {props.name}</p>
            <p>Gender :{props.gender}</p>
            <p>Status :{props.status}</p>
        </div>
        
        
        </div>
}