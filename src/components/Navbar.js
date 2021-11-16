import React from 'react'
import "../style/Navbar.css"
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar" >
            <ul className="navbar_list" >
                <li >
                   <Link to='/' className="navbar_item"  >
                        Projects
                   </Link>                
                </li>
                <li > 
                    <Link to='about' className="navbar_item" >
                        About
                   </Link>   </li>
                {/* <li className="navbar_item" >Projects</li> */}
                <li className="navbar_item" >Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
