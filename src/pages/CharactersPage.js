import React, { useEffect, useState } from 'react'
import FilterStatus from '../component/characters/FilterStatus';

export default function CharactersPage() {
    const [items, setItems] = useState(null);
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character?page=");
    const [gender, setGender] = useState("");


    useEffect(
        () => {
            fetch(url).then((respon) => respon.json()).then((results) => { setItems(results) });
        }, [url]
    );
    function next() {
        if (items.info.next === null) {
            setUrl("https://rickandmortyapi.com/api/character?page=1")
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
        if (gender === 'male') {
            const genderFilter = names.filter(person => person.gender === "Male")
            return genderFilter
        } else if (gender === 'female') {
            const genderFilter = names.filter(person => person.gender === "Female")
            return genderFilter
        } else return names
    }

    return (
        <div>
            <label>Gender:</label>
            <input type="radio" name="gender" value='male' onChange={(e) => setGender(e.target.value)} /> <label>Male</label>
            <input type="radio" name="gender" value='female' onChange={(e) => setGender(e.target.value)} /> <label>FeMale</label>
            <input type="radio" name="gender" value='all' onChange={(e) => setGender(e.target.value)} /> <label>All</label>
            <br />
            {items && <FilterStatus persone={search(items.results)} />}
            <button onClick={() => prev()}>Prev</button>
            <button onClick={() => next()}>Next</button>
        </div>
    )
}