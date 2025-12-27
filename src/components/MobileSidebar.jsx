import { NavLink } from 'react-router-dom';
import { TiTimes } from 'react-icons/ti';
import './StyleComponents/MobileSidebar.css';

export default function MobileSidebar({ isOpen, onClose, navItems }) {
    if (!isOpen) return null;

    const renderNavItems = navItems.map((item) => (
        <NavLink key={item.label} to={item.path} onClick={onClose} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            {item.label}
        </NavLink>
    ));
    return (
        <div className="sidebar-overlay" onClick={onClose}>
            <aside className="mobile-sidebar" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <TiTimes />
                </button>

                <nav className="sidebar-nav">{renderNavItems}</nav>
            </aside>
        </div>
    );
}
