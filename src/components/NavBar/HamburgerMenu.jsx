import React from 'react'

export function HamburgerMenu({ navSlide }) {
    return (
        <div className="hamburger-menu" onClick={navSlide}>
            {/* Lines of the literal hamburger mmenu */}
            <div className="line" id="line1" />
            <div className="line" id="line2" />
            <div className="line" id="line3" />
        </div>
    )
}
