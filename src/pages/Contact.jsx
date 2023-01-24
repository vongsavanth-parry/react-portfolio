import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="CONTACT." text="Have an idea ? Let's talk." />
            <ContactForm />
            <Footer />
        </div>
    );
};