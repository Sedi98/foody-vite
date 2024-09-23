import { createContext } from "react";

type Props = {
    value: boolean
    setValue: () => void
    type: string
    setType: (val: string) => void
    operation: string
    setOperation: (val: string) => void
}


export const ProductContext = createContext<Props>({
    value: true,
    setValue: () => {},
    type: "",
    setType: () => {},
    operation: '',
    setOperation: () => {},
})


