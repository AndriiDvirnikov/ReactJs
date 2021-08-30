
import React, { useState } from 'react'
import Characters from './Characters'

export default function FilterStatus({ persone }) {

    const [status, setStatus] = useState("");
    function statusPers(stat) {
        if (status === "alive") {
            const statusFilter = stat.filter(person => person.status === "Alive")
            return statusFilter
        } else if (status === "dead") {
            const statusFilter = stat.filter(person => person.status === "Dead")
            return statusFilter
        } else if (status === "uknown") {
            const statusFilter = stat.filter(person => person.status === "unknown")
            return statusFilter
        }
        return stat
    }
    return <div>
        <label>Status:</label>
        
        <input type="radio" name="status" value='alive' onChange={(e) => setStatus(e.target.value)} /> <label>Alive</label>
        <input type="radio" name="status" value='dead' onChange={(e) => setStatus(e.target.value)} /> <label>Dead</label>
        <input type="radio" name="status" value='uknown' onChange={(e) => setStatus(e.target.value)} /> <label>Uknown</label>
        <Characters persone={statusPers(persone)} />
    </div>
}
