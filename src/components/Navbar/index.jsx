import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.scss";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => setOpenMenu(!openMenu);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header__bg" : "header"}>
            <Link to="/">
                <h1>Vongsavanth Parry.</h1>
            </Link>
            <ul className={openMenu ? "header__nav-menu active" : "header__nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="header__menu-icon" onClick={handleClick}>
                {openMenu ?
                    <FaTimes size={20} style={{ color: "#fff" }} />
                    :
                    <FaBars size={20} style={{ color: "#fff" }} />
                }
            </div>
        </div>
    );
};