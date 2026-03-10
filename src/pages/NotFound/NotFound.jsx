import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="page-content" style={{ textAlign: 'center', padding: '80px 20px' }}>
            <h1 style={{ fontSize: '6rem', color: '#c8390a', lineHeight: 1 }}>404</h1>
            <p style={{ fontSize: '1.2rem', margin: '16px 0 32px', color: '#555' }}>
                Page not found.
            </p>
            <Link to="/" style={{
                background: '#c8390a', color: '#fff', padding: '10px 28px',
                fontWeight: 500, fontSize: '0.9rem'
            }}>
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
