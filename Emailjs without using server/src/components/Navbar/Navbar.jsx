import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../assets/icons/icons8-hamburger-50.svg'
import Brand from '../../assets/images/GreenCell-Logo_TM.jpg'
import downArrow from "../../assets/images/down-arrow.png"
import './navbar.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Brand} alt="" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About <img src={downArrow} alt="" /></NavLink>
                            <ul class="dropdown-menu">
                                <li>
                                    <NavLink to="about/team" class="dropdown-item">Team</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about/teams" class="dropdown-item">career</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/governance">Governance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar