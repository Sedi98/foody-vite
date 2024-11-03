import React, { useContext, createContext, useState } from "react";

type ContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<any>({
  isOpen: false,
  setIsOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const MenuProvider: React.FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu =() => useContext(MenuContext);



