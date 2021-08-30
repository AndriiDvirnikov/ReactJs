import React from 'react'
import { Link } from 'react-router-dom'


  function Menu (){
    return <ul>
        <li><Link to="/characters">Characters</Link> </li>
        <li><Link to="/episode">Episode</Link></li>
    
    </ul>
}
export default Menu