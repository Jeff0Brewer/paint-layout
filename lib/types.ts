type SwatchData = {
    color: string,
    url: string
}

type SwatchProps = {
    color: string,
    opacity: number,
    url: string,
    setUrl: () => void
}

type SwatchesProps = {
    swatches: Array<SwatchData>
}

export type {
    SwatchData,
    SwatchProps,
    SwatchesProps
}
