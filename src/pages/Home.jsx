import React from "react";
import Navbar from "../components/Navbar";
import HeroImg1 from "../components/HeroImg1";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroImg1 />
            <Work />
            <Footer />
        </div>
    );
};