import React from 'react'
import { Link } from 'react-router-dom'

export default function EpisodInfo ({info,columns}){
    return <tr>
    {columns.map(column => <td>{ column === "characters" ?
    <Link to="/characters">GoTo</Link> : info[column]}</td>)}
</tr>
}