import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileSidebar from './MobileSidebar';
import './StyleComponents/Navbar.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';
import { TiThMenuOutline } from 'react-icons/ti';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Live', path: '/live' },
        { label: 'Sports', path: '/sports' },
        { label: 'Series', path: '/series' },
        { label: 'Movies', path: '/movies' },
        { label: 'Kids', path: '/kids' },
    ];

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="logo-text">
                        DiStreaming
                    </Link>

                    {/* nav items */}
                    <nav className="navbar-nav desktop-only">
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.path} className="nav-link">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right */}
                    <div className="navbar-right">
                        <div className="search-box desktop-only">
                            <input type="text" placeholder="What to watch today?" className="search-input" />
                            <button className="search-btn">
                                <FaMagnifyingGlass />
                            </button>
                        </div>

                        <button className="subscribe-btn desktop-only">SUBSCRIBE</button>

                        <button className="sign-in-btn desktop-only">
                            <IoMdPerson /> Sign In
                        </button>

                        {/* Hamburger Mobile */}
                        <button className="menu-btn mobile-only" onClick={() => setIsSidebarOpen(true)}>
                            <TiThMenuOutline />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} navItems={navItems} />
        </>
    );
}
