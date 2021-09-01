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
    const columns = dimension[0] && Object.keys(dimension[0]);
    return (
        <table cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>{dimension[0] && columns.map((heading) => <th key={heading.id}>{heading}</th>)}</tr>
        </thead>
        <tbody>

            {dimension.map((item) => (
                <LocationInfo info={item} columns={columns}/>
            ))}
        </tbody>


    </table >
    )
}