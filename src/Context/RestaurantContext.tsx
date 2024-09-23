import { createContext } from "react";

type Props = {
    options: any[],
    setOption: (val: string) => void
    
}


export const RestaurantContext = createContext<Props>({
    options:[],
    setOption: () => {},
})