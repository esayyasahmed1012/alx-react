import React from "react";
import "./Footer.css"

function Header(){
    return (
     <footer className="App-footer">
        <i>Copyright {getFullYear()} - {getFooterCopy()}</i>
      </footer>
    )
}

export default Footer;