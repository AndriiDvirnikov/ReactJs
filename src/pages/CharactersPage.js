import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import FilterStatus from '../component/characters/FilterStatus';

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
            setUrl(items.info.prev)
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

            <label class="rad-text">Gender:</label>
            <div className="radio-div">
                <label class="rad-label">
                <input type="radio" class="rad-input" name="gender" value='male' onChange={(e) => setGender(e.target.value)} /> 
                    <div class="rad-design"></div>
                    <div class="rad-text">Male</div>
                </label>
                <label class="rad-label">
                <input type="radio" class="rad-input" name="gender" value='female' onChange={(e) => setGender(e.target.value)} />
                    <div class="rad-design"></div>
                    <div class="rad-text">FeMale</div>
                </label>
                <label class="rad-label">
                <input type="radio" class="rad-input" name="gender" value='all' onChange={(e) => setGender(e.target.value)} />
                    <div class="rad-design"></div>
                    <div class="rad-text">All</div>
                </label>
            </div>
            <br />
            {items && <FilterStatus persone={search(items.results)} />}
            <Button onClick={() => prev()}>Prev</Button>
            <Button onClick={() => next()}>Next</Button> 



        </div>
    )
}