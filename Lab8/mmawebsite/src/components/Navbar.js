import React from 'react'

const Navbar = ()=>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">mma</a>
                <ul className="right">
                    <li><a href="/Instructional">Instructional</a></li>
                    <li><a href="/Schedule">Schedule</a></li>
                    <li><a href="/Posts">PostBoard</a></li>
                </ul>
            </div>
        </nav>
        
    )
}
export default Navbar