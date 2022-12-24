import React from 'react'
import Swatches from './swatch'
import { SwatchData } from '../lib/types'
import { swatches } from '../lib/swatch-data'
import styles from '../styles/Intro.module.css'

type IntroProps = {
    setSwatch: (swatch: SwatchData) => void
}

const Intro = (props: IntroProps) => {
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
            <Swatches setSwatch={props.setSwatch} swatches={swatches} />
        </article>
    )
}

export default Intro
