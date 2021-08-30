import React, { useEffect, useState } from 'react'
import EpisodesFilter from '../component/Episodes/EpisodesFilter';

export default function EpisodePage (){
    const [items, setItems] = useState(null);
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/episode?page=");
    const [q, setQ] = useState("");


    useEffect(
        () => {
            fetch(url).then((respon) => respon.json()).then((results) => { setItems(results)});
        }, [url]
    );
    function next() {
        if (items.info.next === null) {
            setUrl("https://rickandmortyapi.com/api/episode?page=1")
        } else {
            setUrl(items.info.next)
        }
    }

    function prev() {
        if (items.info.prev === null) {
            setUrl(url + items.info.pages)
        } else {
            setUrl(items.info.prev)
        }
    }

    function search(names) {
     return names.filter((name)=>name.name.toLowerCase().indexOf(q)>-1);
    }

    return (
        <div>
            <input type="text" value={q} onChange={(e)=>setQ(e.target.value)}/>
            {items &&<EpisodesFilter episodes={search(items.results)} />}
            <button onClick={() => prev()}>Prev</button>
            <button onClick={() => next()}>Next</button> 
        </div>
    )
}