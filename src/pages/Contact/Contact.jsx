import React, { useState } from 'react';
import './Contact.css';

function Contact({ lang }) {
    const ar = lang === 'ar';
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Backend integration point */
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact page-content">
            <section className="contact__section">
                <div className="contact__inner">

                    {/* Left – Contact Info */}
                    <div className="contact__info">
                        <h2 className="contact__heading">{ar ? 'اتصل بنا' : 'Contact Us'}</h2>
                        <ul className="contact__list">
                            <li>{ar ? 'الرمز البريدي في المملكة العربية السعودية' : 'Postal Code in the Kingdom of Saudi Arabia'}</li>
                            <li>{ar ? 'شركة أضواء العاصمة للكهروميكانيكا' : 'Capital Lights Co. For Electromechanics.'}</li>
                            <li>{ar ? 'ص.ب 2632، الرياض 11461' : 'P.O. Box 2632, Riyadh 11461'}</li>
                            <li>
                                {ar ? 'هاتف:' : 'Tel:'} 0096611707002 / 0096611707003&nbsp;
                                {ar ? 'فاكس:' : 'Fax:'} 0096611705514
                            </li>
                            <li>
                                {ar ? 'البريد الإلكتروني:' : 'E-mail:'}&nbsp;
                                <a href="mailto:info@capital-lights.com">info@capital-lights.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right – Contact Form */}
                    <div className="contact__form-col">
                        {sent && (
                            <div className="contact__success">
                                {ar ? 'تم إرسال رسالتك بنجاح!' : 'Your message was sent successfully!'}
                            </div>
                        )}
                        <form className="contact__form" onSubmit={handleSubmit} noValidate>

                            <div className="contact__field">
                                <label className="contact__label contact__label--required">
                                    {ar ? 'الاسم' : 'Name'}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="contact__input"
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label className="contact__label contact__label--required">
                                    {ar ? 'البريد الإلكتروني' : 'Email'}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="contact__input"
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label className="contact__label">
                                    {ar ? 'الموضوع' : 'Subject'}
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    className="contact__input"
                                />
                            </div>

                            <div className="contact__field">
                                <label className="contact__label">
                                    {ar ? 'رسالتك' : 'Your Message'}
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="contact__input contact__textarea"
                                    rows={7}
                                />
                            </div>

                            <button type="submit" className="contact__send-btn">
                                {ar ? 'إرسال' : 'SEND'}
                            </button>

                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contact;
