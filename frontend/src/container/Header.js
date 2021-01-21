import React from 'react'
import { NavLink } from 'react-router-dom';

import './css/header.scss'


export default function Header() {
    function reload() {
        window.location.href = 'http://localhost:3000'
    }
    return (
        <div className='main'>
            <NavLink
                 to={`/`}
                className='recuperatorio'
                >
                    <h3 onClick={() => reload()}>Recuperatorio</h3>
            </NavLink> 
        </div>
    )
}
