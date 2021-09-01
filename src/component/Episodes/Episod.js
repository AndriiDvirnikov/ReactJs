import React, { useState } from 'react'
import EpisodInfo from './EpisodInfo';
export default function Episod({ episodes }) {
    
    
    const columns = episodes[0] && Object.keys(episodes[0]);
    return (
        
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>{episodes[0] && columns.map((heading) => <th key={heading.id}>{heading}</th>)}</tr>
                </thead>
                <tbody>

                    {episodes.map((item) => (
                        <EpisodInfo info={item} columns={columns}/>
                    ))}
                </tbody>


            </table >
        
    )
}