"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
    interface Window {
        adsbyjuicy?: any[];
    }
}

export default function JuicyAdsHeader() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window.adsbyjuicy = window.adsbyjuicy || []).push({ 'adzone': 1110248 });
        }
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
            <Script
                src="https://poweredby.jads.co/js/jads.js"
                strategy="lazyOnload"
                data-cfasync="false"
            />
            <ins id="1110248" data-width="728" data-height="90" style={{ display: 'block' }}></ins>
        </div>
    );
}
