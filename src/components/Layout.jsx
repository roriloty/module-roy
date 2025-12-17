import React, { useState, useEffect } from 'react';
import '../styles/features/Layout.css';

const Layout = ({ children, title, sidebarContent, onHome }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);

    // Auto-close sidebar on mobile selection
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="app-shell">
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="brand-logo">Module 101 (โมดูล 101)</div>
                    <button
                        className="toggle-btn"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        «
                    </button>
                </div>

                {/* Back to Home Button */}
                <div style={{ padding: '0 1rem', marginBottom: '1rem' }}>
                    <button
                        onClick={onHome}
                        style={{
                            width: '100%',
                            padding: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.2s'
                        }}
                    >
                        🏠 หน้าหลัก (Home)
                    </button>
                </div>

                <div className="sidebar-content">
                    {sidebarContent}
                </div>
            </nav>
            {/* ... rest of component ... */}

            {/* Overlay for mobile */}
            {isSidebarOpen && window.innerWidth <= 900 && (
                <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
            )}

            <main className="main-content">
                <header className="top-bar">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                        >
                            ☰
                        </button>
                        <h1 className="page-title">{title}</h1>
                    </div>
                    <div className="user-profile">
                        <div className="avatar">U</div>
                    </div>
                </header>
                <div className="content-area">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
