import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Swatch.module.css'
import { SwatchData, SwatchProps, SwatchesProps } from '../lib/types'

const Swatch = (props: SwatchProps) => {
    return (
        <a
            className={styles.swatch}
            style={{
                backgroundColor: props.color,
                opacity: props.opacity
            }}
            onMouseEnter={props.setUrl}
        ></a>
    )
}

const Swatches = (props: SwatchesProps) => {
    const [selectUrl, setSelectUrl] = useState<string>('')

    return (
        <section
            className={styles.swatchDisplay}
            onMouseLeave={() => setSelectUrl('')}
        >
            <span className={styles.swatches}>{
                props.swatches.map(
                    (sp: SwatchData, i: number) =>
                        <Swatch
                            key={i}
                            color={sp.color}
                            opacity={(selectUrl && selectUrl !== sp.url) ? 0.3 : 1}
                            url={sp.url}
                            setUrl={() => setSelectUrl(sp.url)}
                        />
                )
            }</span>
            <div className={styles.display}>{
                props.swatches.map(
                    (sp: SwatchData, i: number) => (
                        <Image
                            className={sp.url === selectUrl ? styles.selected : ''}
                            key={i}
                            src={sp.url}
                            alt="painting"
                            sizes="600px"
                            fill
                        />
                    )
                )
            }</div>
        </section>
    )
}

export default Swatches
