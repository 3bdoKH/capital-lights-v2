import React from 'react';
import c1 from '../../media/customers/customer_1.jpeg';
import c2 from '../../media/customers/customer_2.jpeg';
import c3 from '../../media/customers/customer_3.jpeg';
import c4 from '../../media/customers/customer_4.jpeg';
import c5 from '../../media/customers/customer_5.jpeg';
import c6 from '../../media/customers/customer_6.jpeg';
import c7 from '../../media/customers/customer_7.jpeg';
import c8 from '../../media/customers/customer_8.jpeg';
import c9 from '../../media/customers/customer_9.jpeg';
import c10 from '../../media/customers/customer_10.jpeg';
import c11 from '../../media/customers/customer_11.jpeg';
import c12 from '../../media/customers/customer_12.jpeg';
import cert from '../../media/customers/cert.jpg'
import './Clients.css';

const logos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];
const certificate = cert;

function Clients({ lang }) {
    // const ar = lang === 'ar';

    return (
        <div className="clients page-content">

            <section className="clients__grid-section">
                <div className="clients__container">

                    {/* 5-column logo grid */}
                    <div className="clients__grid">
                        {logos.map((src, i) => (
                            <div key={i} className="clients__logo-cell">
                                <img src={src} alt={`Client ${i + 1}`} />
                            </div>
                        ))}
                    </div>

                    {/* Centered certificate image */}
                    <div className="clients__cert-row">
                        <div className="clients__cert-cell">
                            <img src={certificate} alt="Certificate" />
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Clients;
