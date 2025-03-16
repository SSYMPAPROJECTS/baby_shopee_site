import React, { useState, useEffect, useRef } from "react";
import './Nav.css';
import BS from '../../assets/logos/bbs_logo_png.png'; 

const Nav = ({ scrollToSection, sectionRefs }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); // Reference for the menu

    // Function to handle outside clicks
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Close the menu if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]); // Runs when menuOpen changes

    return (
        <div className="nav_container">
            <div className="logo_container">
                <img src={BS} alt="Baby Shopee - Best Baby Store Online" className="babyShopee_logo" />
            </div>

            {/* Hamburger Menu Button (for Mobile) */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
       
            <nav className="nav_menu1">
                    <button onClick={() => { scrollToSection?.(sectionRefs?.categoriesRef); }}>Categories</button>
                    <button onClick={() => { scrollToSection?.(sectionRefs?.aboutRef); }}>About Us</button>
                    <button onClick={() => { scrollToSection?.(sectionRefs?.locationsRef);  }}>Locations</button>
                    <button onClick={() => { scrollToSection?.(sectionRefs?.contactsRef); }}>Contacts</button>
            </nav>

            {/* Overlay for Menu (Modern Style) */}
            <div ref={menuRef} className={`nav_overlay ${menuOpen ? 'active' : ''}`}>
                <nav className="nav_menu">
                    <button onClick={() => { scrollToSection?.(sectionRefs?.categoriesRef); setMenuOpen(false); }}>Categories</button>
                    <button onClick={() => { scrollToSection?.(sectionRefs?.aboutRef); setMenuOpen(false); }}>About Us</button>
                    <button onClick={() => { scrollToSection?.(sectionRefs?.locationsRef); setMenuOpen(false); }}>Locations</button>
                    <button onClick={() => { scrollToSection?.(sectionRefs?.contactsRef); setMenuOpen(false); }}>Contacts</button>
                </nav>
            </div>
        </div>
    );
};

export default Nav;
