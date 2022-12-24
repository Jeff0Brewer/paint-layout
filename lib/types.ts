type Nullable<T> = null | T

type SwatchData = {
    color: string,
    url: string,
    title: string,
    description: string,
    price: number
}

type SwatchProps = {
    color: string,
    opacity: number,
    url: string,
    setUrl: () => void,
    setSwatch: () => void
}

type SwatchesProps = {
    swatches: Array<SwatchData>,
    setSwatch: (swatch: SwatchData) => void
}

export type {
    Nullable,
    SwatchData,
    SwatchProps,
    SwatchesProps
}
