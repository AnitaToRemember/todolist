import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
const [state, handleSubmit] = useForm("xjvnvnpw");
if (state.succeeded) {
    
    return <p className="message-form">Thanks for your message, I"ll reply as soon as possible. Have a nice day ${`:)`} !</p>;
    }

    return (
            <form onSubmit={handleSubmit}>
                <label 
                    htmlFor="name" 
                    className="form-label">
                    Name
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Write your name"
                    required />
                <label 
                    htmlFor="email"
                    className="form-label">
                    Email Address
                </label>
                <input
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="yourname@domain.com" 
                    required/>
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}/>
                <label 
                    htmlFor="phone" 
                    className="form-label">
                    Phone Number
                </label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input" 
                    placeholder="+1234567890"
                    required />
                <label 
                    htmlFor="message" 
                    className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="form-input" 
                    placeholder="Leave your message :)" 
                    required/>
                    <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}/>
                <button 
                type="submit" 
                className="submit-button" 
                disabled={state.submitting}>
                Submit
                </button>
            </form>
        );
    }

export default ContactForm