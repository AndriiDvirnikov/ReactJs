import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import LocationFilter from '../component/location/LocationFilter';

const Button = styled.button`
color: #EE74E1;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #FEE140;
border-radius: 10px/40%;
background-color: #FEE140;
font-weight: 900;
transition: all 330ms;
&:hover{
    background-color: #3EECAC;
      color:#EE74E1;
  }
`;
export default function EpisodePage (){

    const [items, setItems] = useState(null);
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/location?page=");
    const [q, setQ] = useState("");

    useEffect(
        () => {
            fetch(url).then((respon) => respon.json()).then((results) => { setItems(results)});
        }, [url]
    );
    function next() {
        if (items.info.next === null) {
            setUrl("https://rickandmortyapi.com/api/location?page=1")
        } else {
            setUrl(items.info.next)
        }
    }

    function prev() {
            setUrl(items.info.prev)
    }

    function search(names) {
     return names.filter((name)=>name.name.toLowerCase().indexOf(q)>-1);
    }

  
    return (
        <div>
            <input placeholder="Enter planet name" className="inp-class" type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
            {items &&<LocationFilter location={search(items.results)} />}
            <Button onClick={() => prev()}>Prev</Button>
            <Button onClick={() => next()}>Next</Button> 
        </div>
    )
}