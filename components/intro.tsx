import React from 'react'
import Swatches from './swatch'
import { SwatchData } from '../lib/types'
import styles from '../styles/Intro.module.css'

const swatches: Array<SwatchData> = [
    {
        color: 'rgb(249, 160, 36)',
        url: '/img/s0.jpg'
    }, {
        color: 'rgb(52, 36, 117)',
        url: '/img/s1.jpg'
    }, {
        color: 'rgb(250, 10, 88)',
        url: '/img/s2.jpg'
    }, {
        color: 'rgb(249, 85, 28)',
        url: '/img/s3.jpg'
    }, {
        color: 'rgb(251, 205, 51)',
        url: '/img/s4.jpg'
    }, {
        color: 'rgb(252, 197, 49)',
        url: '/img/s5.jpg'
    }, {
        color: 'rgb(6, 36, 52)',
        url: '/img/s6.jpg'
    }, {
        color: 'rgb(197, 47, 153)',
        url: '/img/s7.jpg'
    }, {
        color: 'rgb(19, 208, 177)',
        url: '/img/s8.jpg'
    }, {
        color: 'rgb(83, 212, 131)',
        url: '/img/s9.jpg'
    }
]

const Intro = () => {
    return (
        <article className={styles.intro}>
            <h1>Amet mauris commodo quis imperdiet</h1>
            <p>
                Laoreet non curabitur gravida arcu ac tortor dignissim. Nisi quis eleifend quam
                adipiscing vitae proin sagittis nisl.
            </p>
            <p>
                Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Non sodales
                neque sodales ut etiam sit amet nisl purus. Imperdiet sed euismod nisi porta
                lorem.
            </p>
            <Swatches swatches={swatches} />
        </article>
    )
}

export default Intro
