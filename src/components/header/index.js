import React from 'react';
import "./header.css";
import logo from '../../imgs/logo.webp';

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <div className="header_logo_item">                
                    <img className="logo_img" src={logo} />
                </div>
            </div>
            <div className="navbar">
                <div className="navbar_content">
                    <div className="navbar_links">
                        <a className="active" href="#">Home</a>
                        <a href="#">Pages</a>
                        <a href="#">About</a>
                        <a href="#">Events</a>
                        <a href="#">News</a>
                        <a href="#">Spaces & Rooms</a>
                        <a href="#">Store</a>
                    </div>
                    <div className="navbar_icons">
                        <div className="navbar_icons_item"><i class="fas fa-basketball-ball"></i></div>
                        <div className="navbar_icons_item"> <i class="fab fa-facebook-f"></i></div>
                        <div className="navbar_icons_item"><i class="fab fa-twitter"></i></div>                                                                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;