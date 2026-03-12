import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
    { label: 'Home', labelAr: 'الرئيسية', to: '/' },
    { label: 'About', labelAr: 'عن الشركة', to: '/about' },
    { label: 'Services', labelAr: 'الخدمات', to: '/services' },
    { label: 'Projects', labelAr: 'المشاريع', to: '/projects' },
    { label: 'Clients', labelAr: 'العملاء', to: '/clients' },
    { label: 'Contact', labelAr: 'اتصل بنا', to: '/contact' },
];

function Footer({ lang }) {
    const ar = lang === 'ar';
    const [active, setactive] = useState('Home')
    return (
        <footer className="footer" style={ar ? { fontFamily: 'GE-SS-Two' } : {}}>
            <div className="footer__main">
                <div className="footer__container">

                    {/* Col 1 – About */}
                    <div className="footer__col">
                        <h4 className="footer__heading">{ar ? 'عن الشركة' : 'ABOUT US'}</h4>
                        <p className="footer__text">
                            {ar
                                ? 'شركة اضواء العاصمة للكهروميكانيكا، تأسست عام 1387هـ (1967م) لتنفيذ مشاريع الكهروميكانيك والأعمال المدنية.'
                                : 'Capital Lights Co. for Electro-mechanics Contracting Establishment was established in 1387(1967) to carry our electro-mechanics and civil work contracts. The Establishment started operations and managed to build good reputation in the contracting sector in the Kingdom with the onset of early development take off in the country.'}
                        </p>
                    </div>

                    {/* Col 2 – HQ */}
                    <div className="footer__col">
                        <h4 className="footer__heading">{ar ? 'المقر الرئيسي' : 'CORPORATE HEADQUARTERS'}</h4>
                        <ul className="footer__info">
                            <li><strong>{ar ? 'العنوان:' : 'Address:'}</strong> {ar ? 'الرياض، المملكة العربية السعودية' : 'Riyadh Saudi Arabia'}</li>
                            <li><strong>{ar ? 'الهاتف:' : 'Phone:'}</strong> (011) 470-7003</li>
                            <li><strong>{ar ? 'الفاكس:' : 'Fax:'}</strong> (011) 470-5514</li>
                            <li><strong>{ar ? 'البريد:' : 'Email:'}</strong>
                                <a href="mailto:info@capital-lights.com"> info@capital-lights.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3 – Quick Links */}
                    <div className="footer__col">
                        {/* <h4 className="footer__heading footer__heading--hidden">Quick Links</h4> */}
                        <ul className="footer__links">
                            {quickLinks.map((item) => (
                                <li key={item.to}>
                                    <Link to={item.to} className={`footer__link ${active === item.label ? 'footer__link--active' : ''}`}
                                        style={ar ? { fontFamily: 'GE-SS-Two' } : { fontFamily: 'Arial', fontWeight: 'lighter' }}
                                        onClick={() => setactive(item.label)}
                                    >
                                        <span className="footer__link-arrow">{'>'}</span>
                                        {ar ? item.labelAr : item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 – Map */}
                    <div className="footer__col">
                        <h4 className="footer__heading">{ar ? 'الموقع على الخريطة' : 'LOCATION ON MAPS'}</h4>
                        <div className="footer__map">
                            <iframe
                                title="Capital Lights Location"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.38473717253!2d46.708972!3d24.733556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02f5f42ab93f%3A0x3fac83ad82c7ecb1!2z2LTYsdmD2Kkg2KfYttmI2KfYoSDYp9mE2LnYp9i12YXYqSDZhNmE2YPZh9ix2YjZhdmK2YPYp9mG2YrZg9inIC0g2KfZhNmF2LHZg9iyINin2YTYsdim2YrYs9mK!5e1!3m2!1sen!2sus!4v1772722216052!5m2!1sen!2sus"
                                width="100%"
                                height="160"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer__bar">
                <div className="footer__bar-inner">
                    <p className="footer__copy">
                        Copyright 2017 Capital Lights | All Rights Reserved
                    </p>
                    <div className="footer__social">
                        {/* Facebook */}
                        <a href="/" className="footer__social-icon" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        {/* Twitter/X */}
                        <a href="/" className="footer__social-icon" aria-label="Twitter">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="/" className="footer__social-icon" aria-label="YouTube">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="/" className="footer__social-icon" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
