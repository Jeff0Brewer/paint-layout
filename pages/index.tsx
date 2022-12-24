import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Intro from '../components/intro'
import Display from '../components/display'
import { SwatchData, Nullable } from '../lib/types'
import styles from '../styles/Home.module.css'

const wavePath = 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'

export default function Home () {
    const [currSwatch, setCurrSwatch] = useState<Nullable<SwatchData>>(null)

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
                <Intro setSwatch={setCurrSwatch} />
                <div className={styles.wave}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d={wavePath} className={styles.shapeFill}></path>
                    </svg>
                </div>
            </section>
            <Display data={currSwatch} />
        </>
    )
}
