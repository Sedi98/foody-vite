import { createContext, useState, ReactNode } from "react";


type UserContextProps = {
    userID: string|null
    setUserID: React.Dispatch<React.SetStateAction<string|null>>
    user: object|null|any
    setUser: React.Dispatch<React.SetStateAction<object|null>>
}


const UserContext = createContext<UserContextProps>({
    userID: "",
    setUserID: () => {},
    user: {},
    setUser: () => {}
});


type UserProps = {
    children: ReactNode
}

const UserContextProvider: React.FC<UserProps> = ({children}) => {

    const [userID, setUserID] = useState<string|null>(null);
    const [user, setUser] = useState<any|null>(JSON.parse(localStorage.getItem("userInfo") as string) || null);

    return (
        <UserContext.Provider value={{ userID, setUserID, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, UserContextProvider }