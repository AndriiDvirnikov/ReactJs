import React,{useState } from 'react'
import Location from './Location'


export default function DimensionFilter({ dimension }) {
    const [q, setQ] = useState("");
    function search(dimen) {
        return dimen.filter((dim)=>dim.dimension.toLowerCase().indexOf(q)>-1);
       }
    return <div>
        <label>DimensionType</label><input type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
        <Location dimension={search(dimension)} /> 
    </div>
}