import React from 'react';
import './Services.css';

function Services({ lang }) {
    return (
        <div className="services page-content">
            <div className="page-banner">
                <h1>{lang === 'ar' ? 'الخدمات' : 'Services'}</h1>
            </div>
            <div className="container section">
                <p className="placeholder-notice">Services page — content coming soon.</p>
            </div>
        </div>
    );
}

export default Services;
