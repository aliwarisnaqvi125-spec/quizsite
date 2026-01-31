"use client";

import Script from "next/script";
import { useEffect } from "react";
import styles from './JuicyAdsFloating.module.css';

declare global {
    interface Window {
        adsbyjuicy?: any[];
    }
}

export default function JuicyAdsFloating() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window.adsbyjuicy = window.adsbyjuicy || []).push({ 'adzone': 1110235 });
        }
    }, []);

    return (
        <div className={styles.floatingAd}>
            <Script
                src="https://poweredby.jads.co/js/jads.js"
                strategy="lazyOnload"
                data-cfasync="false"
            />
            <ins id="1110235" data-width="300" data-height="100" style={{ display: 'block' }}></ins>
        </div>
    );
}
