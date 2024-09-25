import { createContext } from "react";

type Props = {
    value: boolean
    setValue: () => void
    setActiveData: (val: any) => void
    setVariation: (val: string) => void
    data: any
    variation: string
}


export const ProductContext = createContext<Props>({
    value: true,
    data: {},
    variation: "",
    setValue: () => {},
    setActiveData: () => {},
    setVariation: () => {},
    
})


