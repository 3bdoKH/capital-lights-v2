import React from 'react';
import c1 from '../../media/customers/Customer_1.jpg';
import c2 from '../../media/customers/Customer_2.jpg';
import c3 from '../../media/customers/Customer_3.jpg';
import c4 from '../../media/customers/Customer_4.jpg';
import c5 from '../../media/customers/Customer_5.jpg';
import c6 from '../../media/customers/Customer_6.jpg';
import c7 from '../../media/customers/Customer_7.jpg';
import c8 from '../../media/customers/Customer_8.jpg';
import c9 from '../../media/customers/Customer_9.jpg';
import c10 from '../../media/customers/Customer_10.jpg';
import c11 from '../../media/customers/Customer_11.jpg';
import './Clients.css';

const logos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
const certificate = c11;

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
