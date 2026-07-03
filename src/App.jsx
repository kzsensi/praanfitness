
import React, { useEffect } from 'react';
import { Agentation } from "agentation";
import gsap from 'gsap';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollingCards from './components/ScrollingCards';
import Rotate from './components/Rotate';
import Track from './components/Track';
import Stats from './components/Stats';
import IconsScroll from './components/IconsScroll';
import Membership from './components/Membership';
import Reviews from './components/Reviews';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';
import './assets/webflow.css';

export default function App() {
    useEffect(() => {
        if (window.Webflow) {
            window.Webflow.destroy();
            window.Webflow.ready();
            window.Webflow.require('ix2').init();
        }

        // Custom cursor follower animation
        const circle = document.getElementById('circle');
        if (circle) {
            const xTo = gsap.quickTo(circle, "x", {duration: 0.3, ease: "power3"});
            const yTo = gsap.quickTo(circle, "y", {duration: 0.3, ease: "power3"});

            const moveCursor = (e) => {
                xTo(e.clientX);
                yTo(e.clientY);
            };

            window.addEventListener("mousemove", moveCursor);

            return () => {
                window.removeEventListener("mousemove", moveCursor);
            };
        }
    }, []);

    return (
        <div className="page-wrapper">
            <Preloader />
            {import.meta.env.DEV && <Agentation />}
            <div className="custom-cursor-wrapper">
                <div id="circle" className="circle bg-yellow-500" />
            </div>
            <Header />
            <Hero />
            <ScrollingCards />
            <div className="bg-anim-wrapper">
                <Rotate />
                <Track />
            </div>
            <Stats />
            <IconsScroll />
            {/* <Membership /> */}
            <Reviews />
            <About />
            <Team />
            <CTA />
            <Contact />
            <Footer />
        </div>
    );
}

