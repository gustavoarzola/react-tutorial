import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div style={headerStyle}>
            <h1>Todo List!</h1>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
        </div>
    );
}

const linkStyle = {
    color: "#fff",
    padding: "10px"
}

const headerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: '5px'
}

export default Header;