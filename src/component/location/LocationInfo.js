import React from 'react'
import { Link } from 'react-router-dom'

export default function LocationInfo({ info,columns }) {
    return (<tr >
        {
            columns.map(column => <td>{column === "residents" ?
                '' : info[column]}</td>)
        }
    </tr >)
}