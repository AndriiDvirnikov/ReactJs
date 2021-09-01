
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
        <label class="rad-text">Status:</label>
        <div className="radio-div">
            <label class="rad-label">
                <input type="radio" class="rad-input" name="status" value='alive' onChange={(e) => setStatus(e.target.value)} />
                <div class="rad-design"></div>
                <div class="rad-text">Alive</div>
            </label>
            <label class="rad-label">
            <input type="radio" class="rad-input" name="status" value='dead' onChange={(e) => setStatus(e.target.value)} />
                <div class="rad-design"></div>
                <div class="rad-text">Dead</div>
            </label>
            <label class="rad-label">
            <input type="radio" class="rad-input" name="status" value='uknown' onChange={(e) => setStatus(e.target.value)} />
                <div class="rad-design"></div>
                <div class="rad-text">Uknown</div>
            </label>
        </div>
        <Characters persone={statusPers(persone)} />
    </div>
}
