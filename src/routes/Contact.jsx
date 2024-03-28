import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer";
import Calendar from "../components/calendar/Calendar";

const Contact = () => {
    return (
        <>
            <Header />
            <main>
            <ContactForm />
            </main>
            <Footer />
            <Calendar/>
        </>   
 )
}

export default Contact;