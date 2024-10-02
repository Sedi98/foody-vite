import { createContext, useState, ReactNode, useEffect } from "react";

type Props = {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const basketContext = createContext<Props>({
  trigger: false,
  setTrigger: () => {},
  count: 0,
  setCount: () => {},
});

const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (trigger) {
      setTrigger(false);
    }
  }),[trigger];

  return (
    <basketContext.Provider value={{ trigger, setTrigger,count,setCount }}>
      {children}
    </basketContext.Provider>
  );
};

export { basketContext, BasketProvider };
