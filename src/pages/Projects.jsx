import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
// import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

export default function Projects() {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
            <Work />
            {/* <PricingCard /> */}
            <Footer />
        </div>
    );
};