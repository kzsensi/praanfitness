
import React, { useEffect } from 'react';
import { Agentation } from "agentation";

import Hero from './components/Hero';
import PlainSection from './components/PlainSection';
import Rotate from './components/Rotate';
import Track from './components/Track';
import Stats from './components/Stats';
import './index.css';
import './assets/webflow.css';

export default function App() {
    useEffect(() => {
        if (window.Webflow) {
            window.Webflow.destroy();
            window.Webflow.ready();
            window.Webflow.require('ix2').init();
        }
    }, []);

    return (
        <div className="page-wrapper">
            {import.meta.env.DEV && <Agentation />}
            <div className="custom-cursor-wrapper">
                <div id="circle" className="circle bg-yellow-500" />
            </div>
            <Hero />
            <PlainSection />
            <Rotate />
            <Track />
            <Stats />
        </div>
    );
}

