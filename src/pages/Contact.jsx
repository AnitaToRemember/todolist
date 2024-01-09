import { FloatingWhatsApp } from 'react-floating-whatsapp'
import '../styles/pages/Contact.css';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <section className="contact-container">
            <h2 className="contact-heading">Contact me</h2>
            <ContactForm />
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
