import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home () {
    return (
        <>
            <Head>
                <title>Paint</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <section className={styles.landing}>
                <Image
                    className={styles.graphic}
                    src="/landing-flow.jpg"
                    alt="Colorful paint graphic"
                    fill
                    priority
                />
            </section>
        </>
    )
}
