import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul style={{display: 'flex', justifyContent: 'space-between', width: '50%', listStyle: 'none'}}>
                <li>
                    <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
                </li>
                <li>
                    <Link to='/post' style={{textDecoration: 'none'}}>Post</Link>
                </li>

            </ul>
        </>
    );
}