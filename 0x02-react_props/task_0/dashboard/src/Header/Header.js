import React from "react";
import logo from "../assets/holberton-logo.jpg"
import "./Header.css"

function Header(){
    return (
        <div className="App-header">
            <image src={logo} alt="logo"></image>
            <h1>School Dashboard</h1>
        </div>
    )
}

export default Header;