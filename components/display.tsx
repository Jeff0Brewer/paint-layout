import React from 'react'
import Image from 'next/image'
import { SwatchData, Nullable } from '../lib/types'
import styles from '../styles/Display.module.css'

type DisplayProps = {
    data: Nullable<SwatchData>
}

const Display = (props: DisplayProps) => {
    if (!props.data) { return <></> }
    return (
        <section className={styles.display}>
            <div className={styles.bg}>
                <Image
                    src={props.data.url}
                    alt={props.data.title}
                    sizes='100vw'
                    fill
                />
                <div className={styles.fade}></div>
            </div>
            <div className={styles.img}>
                <Image
                    src={props.data.url}
                    alt={props.data.title}
                    sizes='70vw'
                    fill
                />
            </div>
            <div className={styles.text}>
                <h1 className={styles.title}>{props.data.title}</h1>
                <p className={styles.description}>{props.data.description}</p>
                <p className={styles.price}>{`$${props.data.price.toFixed(2)}`}</p>
                <button>duis</button>
            </div>
        </section>

    )
}

export default Display
