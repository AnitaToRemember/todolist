import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import '../styles/pages/Contact.css';
import Logo from '../components/Logo';

function Contact() {
    return (
        <section className="contact-container">
            <h2 className="contact-heading">Contact me</h2>

            {/* Contact Form */}
            <form className="contact-form">
                <fieldset className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" className="form-input" required />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-input" required />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" className="form-input" required />
                </fieldset>

                <fieldset className="form-group">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea id="message" name="message" className="form-input" required />
                </fieldset>

                <button type="submit" className="submit-button">Submit</button>
            </form>

            {/* Contact Information */}
            <section className="contact-info">
                <h3 className="info-heading">For direct contact:</h3>
                <p className="info-details">
                    Phone: +34 650 49 11 45<br />
                    Email: best.anac@gmail.com
                </p>
            </section>
            <FloatingWhatsApp 
            phoneNumber="34650491145"
            accountName="Ana Cristina"
            chatMessage="Hello there! 🤝 How can I help?"
            avatar="https://media.licdn.com/dms/image/D4D03AQEy0kZX9LhgUw/profile-displayphoto-shrink_400_400/0/1702553246341?e=1710374400&v=beta&t=I2mjsYQyWqGqwQM4SmctLIBDjTXyM2uEJCmIDr6FkH8"
            allowEsc
            allowClickAway
            notification
            notificationSound
            />
        </section>
    );
}

export default Contact;
