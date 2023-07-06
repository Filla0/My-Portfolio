import React, { useState } from 'react'
import "./header.css"

const Header = () => {
    /*=============== Toggle menu ===============*/
    const[Toggle, showmenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav_container">
                <a href="index.html" className="nav__logo">Smith</a>

                <div className={Toggle ? "nav___menu show-menu" : "nav___menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav___link active-link">
                                <i className="uil uil-estate nav_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav___link">
                                <i className="uil uil-user nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav___link">
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav___link">
                                <i className="uil uil-briefcase-alt nav_icon"></i> Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" className="nav___link">
                                <i className="uil uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav___link">
                                <i className="uil uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showmenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showmenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    )
}


export default Header