import React from 'react'

export function HamburgerMenu({ navSlide }) {
    return (
        <div className="hamburger-menu" onClick={navSlide}>
            <div className="hamburger-menu-line" id="hamburger-menu-line1" />
            <div className="hamburger-menu-line" id="hamburger-menu-line2" />
            <div className="hamburger-menu-line" id="hamburger-menu-line3" />
        </div>
    )
}
