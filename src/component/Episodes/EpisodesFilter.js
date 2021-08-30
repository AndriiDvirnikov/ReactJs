import React, { useState } from 'react'
import Episod from './Episod';

export default function EpisodesFilter({ episodes }) {
    return <div>
        <Episod episodes={episodes} />
    </div>
}