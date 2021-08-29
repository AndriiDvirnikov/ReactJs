import React, { useState } from 'react'




export default function Characters({ persone }) {
    return (
        <ul>
            {persone.map((item) => (
                < li key={item.id} > {item.name}</li>
            ))}
        </ul >
    )
}