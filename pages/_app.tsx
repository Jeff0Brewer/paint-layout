import React, { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const resizeHandler = () => {
            const height = `${window.innerHeight}px`
            document.documentElement.style.setProperty('--vh', height)
        }
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])

    return <Component {...pageProps} />
}
