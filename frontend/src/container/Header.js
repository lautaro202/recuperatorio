import React from 'react'
import './css/header.scss'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


export default function Header() {
    function reload() {
        window.location.href = 'http://localhost:3000'
    }
    return (
        <div>
        <SearchBar />
        <Link to={`/`}>
            <h3 onClick={() => reload()}>Recuperatorio</h3>
        </Link>

        </div>
    )
}
