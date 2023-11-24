//@ plugin
import 'bootstrap/dist/css/bootstrap.css'
//@ SCSS (all)
import '../src/assets/stylesheet/all.scss'
//@ *
import React, { useState } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {
    let router = useRouter()
    router.onbeforeunload = function () {
        return "确定离开";
    }
    router.onbeforeunload = function () {
        return "alert('WWW')";
    }
    return <>
        <Head><link rel="icon" href="/favicon.ico" /></Head>
        <Component {...pageProps} />
    </>
}