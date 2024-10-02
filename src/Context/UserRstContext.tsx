import { createContext, useState, ReactNode } from "react";

// Define the type for the context value
interface RstProps {
  rstCategory: string;
  setRstCategory: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with an initial default value
const UserRstContext = createContext<RstProps>({
  rstCategory: '', // Default to an empty array for categories
  setRstCategory: () => {}, // Default no-op function
});

// Context Provider component
interface UserRstContextProviderProps {
  children: ReactNode; // Typing for children props
}

const UserRstContextProvider: React.FC<UserRstContextProviderProps> = ({ children }) => {
  const [rstCategory, setRstCategory] = useState<string>('all'); // Use state for managing categories

  return (
    <UserRstContext.Provider value={{ rstCategory, setRstCategory }}>
      {children}
    </UserRstContext.Provider>
  );
};

export { UserRstContext, UserRstContextProvider };
