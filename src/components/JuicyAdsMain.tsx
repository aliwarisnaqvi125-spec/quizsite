"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
    interface Window {
        adsbyjuicy?: any[];
    }
}

export default function JuicyAdsMain() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window.adsbyjuicy = window.adsbyjuicy || []).push({ 'adzone': 1110243 });
        }
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <Script
                src="https://poweredby.jads.co/js/jads.js"
                strategy="lazyOnload"
                data-cfasync="false"
            />
            <ins id="1110243" data-width="774" data-height="290" style={{ display: 'block' }}></ins>
        </div>
    );
}
