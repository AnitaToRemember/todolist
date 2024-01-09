import React, { useEffect } from "react";
import FloatingWhatsApp from "your-floating-whatsapp-library"; // Replace with the actual library import

function WhatsApp() {
useEffect(() => {
// Initialize the WhatsApp button when the component mounts
const initWhatsApp = () => {
    // Replace the following configuration with your library"s initialization logic
    FloatingWhatsApp({
    phone: "1231231231",
    headerTitle: "Chat with us on WhatsApp!",
    popupMessage: "Hello, how can we help you?",
    showPopup: true,
    buttonImage: "<img src='https://your-image-url.com/whatsapp.svg' />",
    headerColor: "crimson",
    backgroundColor: "crimson",
    position: "right",
    });
};

// Load the library script dynamically
const script = document.createElement("script");
script.src = "https://link-to-your-floating-whatsapp-library/script.js"; // Replace with the actual script URL
script.async = true;
script.onload = initWhatsApp;

document.body.appendChild(script);

// Cleanup on component unmount
return () => {
    document.body.removeChild(script);
};
}, []);

return <div id="WAButton" />;
}

export default WhatsApp;
