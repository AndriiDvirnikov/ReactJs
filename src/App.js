import React, { useEffect, useState } from 'react'
import './App.css';
import Characters from './component/Characters';

function App() {
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
      return names.filter(person => person.gender === "Male")
    } else if (gender === 'female') {
      return names.filter(person => person.gender === "Female")
    } else return names
  }

  return (
    <div className="App">
      <input type="radio" name="gender" value='all' onChange={(e) => setGender(e.target.value)} /> <label>All</label>
      <input type="radio" name="gender" value='male' onChange={(e) => setGender(e.target.value)} /> <label>Male</label>
      <input type="radio" name="gender" value='female' onChange={(e) => setGender(e.target.value)} /> <label>FeMale</label>

      {items && <Characters persone={search(items.results)} />}
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      
      
    </div>
  );
}

export default App;
