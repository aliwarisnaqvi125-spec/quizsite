"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
    interface Window {
        adsbyjuicy?: any[];
    }
}

export default function JuicyAdsScript() {
    useEffect(() => {
        // Ensure the push happens after the script is loaded/component mounted if needed,
        // though the inline script in the original request does it immediately.
        // We'll mimic the requested inline script behavior.
        if (typeof window !== 'undefined') {
            (window.adsbyjuicy = window.adsbyjuicy || []).push({ 'adzone': 1110228 });
        }
    }, []);

    return (
        <>
            <Script
                src="https://poweredby.jads.co/js/jads.js"
                strategy="lazyOnload"
                data-cfasync="false"
            />
            <ins id="1110228" data-width="160" data-height="600" style={{ display: 'block', margin: '0 auto' }}></ins>
        </>
    );
}
