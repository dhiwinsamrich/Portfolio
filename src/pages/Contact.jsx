import React from "react";
import Footer from "../components/Footer.tsx";
import { Skiper19 } from "../components/ui/svg-follow-scroll";
import './Home.css';

const Contact = () => {
  return (
    <div className="home-page">
      <main className="home-main !p-0">
        <Skiper19 />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
