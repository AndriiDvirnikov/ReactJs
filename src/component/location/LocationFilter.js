import React,{useState } from 'react'
import DimensionFilter from './DimensionFilter';


export default function LocationFilter({ location }) {
    const [q, setQ] = useState("");
    function search(types) {
        return types.filter((type)=>type.type.toLowerCase().indexOf(q)>-1);
       }
    return <div>
        <input placeholder="Enter type" className="inp-class" type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
        <DimensionFilter dimension={search(location)} /> 
    </div>
}