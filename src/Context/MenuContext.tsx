import React, { useContext, createContext, useState,useEffect} from "react";

type ContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<ContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const MenuProvider: React.FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  

  useEffect(() => {
    
  
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu =() => useContext(MenuContext);



